
import os
import json
from pathlib import Path
from datetime import datetime, timedelta
import psycopg2
from dotenv import load_dotenv

load_dotenv()

# Configuration
CONNECTION_STRING = os.getenv("ANTIGRAVITY_BRAIN_CONNECTION_STRING")
ROOT_DIR = Path(__file__).parent.parent
MEMORY_DIR = ROOT_DIR / ".agent" / "memory"
LEARNINGS_DIR = MEMORY_DIR / "learnings"
SESSIONS_DIR = MEMORY_DIR / "sessions"

def get_db():
    return psycopg2.connect(CONNECTION_STRING)

def sync_learnings():
    """Push local learnings to Supabase."""
    print("Syncing learnings to Shared Brain...")
    if not LEARNINGS_DIR.exists():
        print("No local learnings found.")
        return

    conn = get_db()
    cur = conn.cursor()

    for agent_file in LEARNINGS_DIR.glob("*.json"):
        agent_id = agent_file.stem
        try:
            with open(agent_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # Update agent profile if changed
            # cur.execute("UPDATE agents SET status = 'active', last_active = NOW() WHERE id = %s", (agent_id,))
            
            for entry in data.get("learnings", []):
                # Check if learning already exists to avoid duplicates (could use a hash or timestamp)
                # For now, simple insert
                cur.execute("""
                    INSERT INTO learnings (agent_id, content, created_at)
                    VALUES (%s, %s, %s)
                    ON CONFLICT DO NOTHING;
                """, (agent_id, entry['learning'], entry.get('timestamp', datetime.now().isoformat())))
                
        except Exception as e:
            print(f"Error syncing {agent_id}: {e}")

    conn.commit()
    cur.close()
    conn.close()
    print("Learning sync complete.")

def sync_heartbeat():
    """Standard heartbeat check and agent activity log."""
    print("Checking orchestra heartbeat...")
    try:
        conn = get_db()
        cur = conn.cursor()
        
        # Mark current agent (conductor/claude) as active
        cur.execute("""
            UPDATE agents 
            SET status = 'active', last_active = NOW() 
            WHERE id = 'marcus';
        """)
        
        conn.commit()
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Heartbeat sync error: {e}")

if __name__ == "__main__":
    sync_heartbeat()
    sync_learnings()

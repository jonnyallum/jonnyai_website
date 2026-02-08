#!/usr/bin/env python3
"""
Deploy JonnyAI Protocol
Deploys jonnyai.website to Hostinger via SFTP
"""

import paramiko
import os
import sys
from pathlib import Path

def deploy_jonnyai():
    # Configuration
    host = "92.112.189.250"
    port = 65002
    username = "u384342620"
    password = "Aprilia100!69."
    
    # Paths
    base_dir = r"C:\Users\jonny\Desktop\AgOS 3.0 template\Clients\jonnyai.website"
    local_dir = os.path.join(base_dir, "out")
    remote_path = "/home/u384342620/domains/jonny-ai.com/public_html" # Checking if it's jonny-ai.com or jonnyai.website
    
    # Note: User previously mentioned "jonny-ai.com" in conversation summaries (d372a5bc-2a0b-44a0-9a98-4d4d590ad0f8)
    # But folder is jonnyai.website.
    # Let's check listing first to be sure.
    
    print(f"Initiating deployment to {host}...")
    
    try:
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(host, port=port, username=username, password=password, timeout=30)
        print("SSH Connection established.")
        
        # Verify remote path
        stdin, stdout, stderr = ssh.exec_command("ls -F ~/domains/")
        domains = stdout.read().decode().strip().split('\n')
        print(f"Found domains: {domains}")
        
        # Determine correct domain folder
        target_domain = None
        for d in domains:
            d = d.strip('/')
            if 'jonny' in d and 'ai' in d: # Simple fuzzy match
                target_domain = d
                break
        
        if not target_domain:
            print("ERROR: Could not find JonnyAI domain on server.")
            return False
            
        print(f"Targeting domain: {target_domain}")
        remote_path = f"/home/u384342620/domains/{target_domain}/public_html"
        print(f"Remote path: {remote_path}")

        sftp = ssh.open_sftp()
        
        # Upload files
        print(f"Deploying from {local_dir}...")
        
        uploaded_count = 0
        
        for root, dirs, files in os.walk(local_dir):
            relative_path = os.path.relpath(root, local_dir)
            remote_root = remote_path if relative_path == '.' else os.path.join(remote_path, relative_path).replace('\\', '/')
            
            # Ensure remote directory exists
            try:
                sftp.stat(remote_root)
            except FileNotFoundError:
                sftp.mkdir(remote_root)
                
            for file in files:
                local_file = os.path.join(root, file)
                remote_file = os.path.join(remote_root, file).replace('\\', '/')
                
                print(f"Uploading {file}...")
                sftp.put(local_file, remote_file)
                uploaded_count += 1
                
        print(f"\nSUCCESS: Deployed {uploaded_count} files to {target_domain}.")
        sftp.close()
        ssh.close()
        return True

    except Exception as e:
        print(f"DEPLOYMENT FAILED: {e}")
        return False

if __name__ == "__main__":
    deploy_jonnyai()

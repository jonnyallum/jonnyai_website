# Parallel Learning Task: [TASK_NAME]

**Run ID:** `PLR-[YYYYMMDD]-[NNN]`  
**Coordinator:** @Coordinator-L  
**Status:** `RECRUITING` | `ACTIVE` | `SCORING` | `COMPLETE`

---

## Objective

**Challenge:** [Clear, measurable goal - what problem are we solving?]

**Success Looks Like:** [Specific outcome - how do we know it's done well?]

**Why Parallel:** [What do we hope to learn from multiple approaches?]

---

## Assigned Agents

| Agent | Domain | Status | Acceptance |
|:------|:-------|:-------|:-----------|
| @Agent1 | [Domain expertise] | `INVITED` | - |
| @Agent2 | [Domain expertise] | `INVITED` | - |
| @Agent3 | [Domain expertise] | `INVITED` | - |

**Minimum Required:** 2 acceptances to proceed

---

## Success Criteria

Agents will be scored on three dimensions (1-10 scale):

### 1. Speed (Weight: 30%)
**Metric:** Time to completion (from briefing to artifact delivery)
- **10/10:** Completed in < [X] minutes
- **7/10:** Completed in [X-Y] minutes
- **5/10:** Completed in [Y-Z] minutes
- **<5:** Exceeded [Z] minutes

### 2. Quality (Weight: 50%)
**Metric:** [Objective quality measure - tests passed, lint score, accuracy, etc.]
- **10/10:** [Specific criteria]
- **7/10:** [Specific criteria]
- **5/10:** [Specific criteria]
- **<5:** [Specific criteria]

### 3. Innovation (Weight: 20%)
**Metric:** Novel techniques, creative solutions, reusable patterns
- **10/10:** Introduced breakthrough approach applicable to other tasks
- **7/10:** Applied existing technique in novel way
- **5/10:** Solid execution, no new patterns
- **<5:** Standard approach only

**Final Score:** `(Speed * 0.3) + (Quality * 0.5) + (Innovation * 0.2)`

**Subjective Overlay:** Jonny's "trillion-dollar bar" review (can adjust final ranking)

---

## Deliverables

Each agent must submit:

1. **Primary Artifact**
   - **Format:** [Code file, document, design, etc.]
   - **Location:** `.tmp/parallel-run-[timestamp]/[agent-handle]/artifact.[ext]`

2. **Self-Score Card**
   - **Format:** Markdown table
   - **Content:**
     ```markdown
     | Dimension | Score (1-10) | Justification |
     |:----------|:-------------|:--------------|
     | Speed | X | [Why this score] |
     | Quality | X | [Why this score] |
     | Innovation | X | [Why this score] |
     ```

3. **Reasoning Chain**
   - **Format:** Markdown document
   - **Content:**
     - Initial approach considered
     - Why chosen path was selected
     - Key decisions made
     - Challenges encountered
     - How challenges were solved

4. **Lessons for Others**
   - **Format:** Bullet list
   - **Content:** 3-5 key insights other agents should adopt
   - **Example:** "Use `performance.now()` instead of `Date.now()` for sub-ms precision"

---

## Timeline

| Milestone | Timestamp | Status |
|:----------|:----------|:-------|
| **Recruitment Opens** | [YYYY-MM-DD HH:MM UTC] | ⏳ |
| **Briefing** | [YYYY-MM-DD HH:MM UTC] | ⏳ |
| **Execution Starts** | [YYYY-MM-DD HH:MM UTC] | ⏳ |
| **Deadline** | [YYYY-MM-DD HH:MM UTC] | ⏳ |
| **Scoring Complete** | [YYYY-MM-DD HH:MM UTC] | ⏳ |
| **Results Announced** | [YYYY-MM-DD HH:MM UTC] | ⏳ |

**Total Duration:** [X] hours

---

## Rules of Engagement

1. **No Communication:** Agents work independently. No collaboration or hints during execution.
2. **Full Transparency:** All reasoning chains and lessons are shared post-run.
3. **Fair Play:** Use only documented tools and techniques available to all agents.
4. **Accept Feedback:** Non-winners commit to implementing winner's key techniques.
5. **Celebrate Wins:** Winner's approach becomes a shared runbook for the entire team.

---

## Scoring Results

| Agent | Speed | Quality | Innovation | Final Score | Rank |
|:------|:------|:--------|:-----------|:------------|:-----|
| @Agent1 | - | - | - | - | - |
| @Agent2 | - | - | - | - | - |
| @Agent3 | - | - | - | - | - |

**Winner:** [TBD]

**Runbook Created:** [Link to `.agent/library/runbooks/[category].md`]

---

## Post-Run Actions

### For Winner
- [ ] Approach documented in runbook
- [ ] Broadcast to all agents via chatroom
- [ ] Added to `.agent/library/runbooks/`

### For Non-Winners
- [ ] Upgrade plan generated: "Adopt [technique] from @Winner"
- [ ] Scheduled for next Training Day
- [ ] GitHub issue created (if applicable)

### For All Agents
- [ ] Learning rank updated in `AGENT_SKILLS_MATRIX.md`
- [ ] Meta-learning logged to `.agent/memory/learning-runs.json`

---

## Meta-Learning Notes

**Pattern Discovered:** [What did this run teach us about agent capabilities?]

**Future Applications:** [Where else could this parallel approach be valuable?]

**Coordinator Notes:** [Any improvements to the parallel learning process itself?]

---

*Template Version: 1.0 | Created: 2026-02-08*

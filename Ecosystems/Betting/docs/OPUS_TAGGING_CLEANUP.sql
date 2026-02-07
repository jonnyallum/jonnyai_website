-- OPUS_TAGGING_CLEANUP.sql
-- Purpose: Preserve Opus_Bets_v4.6 integrity while archiving/removing legacy randomized rows.

-- 1) Preview current distribution
select algorithm_version, count(*) as row_count
from public.bet_predictions
group by algorithm_version
order by row_count desc;

-- 2) Preview rows that are considered legacy randomized entries
select id, algorithm_version, prediction_type, created_at
from public.bet_predictions
where algorithm_version in ('Gaffer_v3.0', 'Handicapper_v3.0')
order by created_at asc;

-- 3) One-time archive table (safe copy before deletion)
create table if not exists public.bet_predictions_archive as
select * from public.bet_predictions where false;

-- 4) Archive legacy rows (idempotent by id)
insert into public.bet_predictions_archive
select p.*
from public.bet_predictions p
where p.algorithm_version in ('Gaffer_v3.0', 'Handicapper_v3.0')
  and not exists (
    select 1
    from public.bet_predictions_archive a
    where a.id = p.id
  );

-- 5) Verify archive counts
select algorithm_version, count(*) as archived_count
from public.bet_predictions_archive
where algorithm_version in ('Gaffer_v3.0', 'Handicapper_v3.0')
group by algorithm_version
order by archived_count desc;

-- 6) Optional hard cleanup (UNCOMMENT ONLY AFTER VERIFYING ARCHIVE)
-- delete from public.bet_predictions
-- where algorithm_version in ('Gaffer_v3.0', 'Handicapper_v3.0');

-- 7) Post-cleanup verification
-- select algorithm_version, count(*) as row_count
-- from public.bet_predictions
-- group by algorithm_version
-- order by row_count desc;

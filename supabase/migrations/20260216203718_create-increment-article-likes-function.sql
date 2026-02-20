create or replace function increment_article_likes(article_id text, amount bigint)
returns bigint
language plpgsql
as $$
declare
  new_likes bigint;
begin
  update articles
  set likes = likes + amount
  where id = article_id
  returning likes into new_likes;

  return new_likes;
end;
$$;

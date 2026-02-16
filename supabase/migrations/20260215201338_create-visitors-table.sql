create table "public"."visitors" (
    "id" text not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
      );

alter table "public"."visitors" enable row level security;

CREATE UNIQUE INDEX visitors_pkey ON public.visitors USING btree (id);

alter table "public"."visitors" add constraint "visitors_pkey" PRIMARY KEY using index "visitors_pkey";
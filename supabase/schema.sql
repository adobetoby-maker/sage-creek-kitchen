create table if not exists reservations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  guest_name text not null,
  phone text not null,
  email text not null,
  date date not null,
  time text not null,
  party_size int not null,
  special_requests text,
  status text default 'pending' check (status in ('pending', 'confirmed', 'cancelled', 'completed'))
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  customer_name text not null,
  phone text not null,
  email text not null,
  pickup_time text not null,
  items jsonb not null,
  total numeric not null,
  status text default 'pending' check (status in ('pending', 'confirmed', 'cancelled', 'completed'))
);

alter table reservations enable row level security;
alter table orders enable row level security;

-- Allow inserts from anon (public form submissions).
-- Admin reads use service-role client which bypasses RLS — no SELECT policy needed for anon.
create policy "Allow public insert reservations" on reservations
  for insert to anon with check (true);

create policy "Allow public insert orders" on orders
  for insert to anon with check (true);

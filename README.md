# Pharmacy Inventory Management

An Express + PostgreSQL inventory management app for a pharmacy — track medicines, their categories, and their manufacturers.

## Tech stack

- Node.js / Express
- PostgreSQL (via `pg`)
- EJS for views
- `dotenv` for config, `express-validator` for form validation

## Database design

### Entities & fields

**category**
| field | type |
|---|---|
| id | serial PK |
| name | varchar, unique, not null |
| description | text |

**manufacturer**
| field | type |
|---|---|
| id | serial PK |
| name | varchar, unique, not null |
| country | varchar |

**medicine**
| field | type |
|---|---|
| id | serial PK |
| name | varchar, not null |
| description | text |
| price | numeric(10,2), not null |
| stock_quantity | integer, not null, default 0 |
| expiry_date | date |
| category_id | integer, FK -> category.id, not null |
| manufacturer_id | integer, FK -> manufacturer.id, not null |

### Relations & constraints

- A **category** can have many **medicines**; a medicine belongs to exactly one category (one-to-many). Every medicine must be assigned a category — `category_id` is `NOT NULL`.
- A **manufacturer** can produce many **medicines**; a medicine has exactly one manufacturer (one-to-many). `manufacturer_id` is `NOT NULL`.
- `stock_quantity` must be `>= 0` (CHECK constraint) — no negative inventory.
- `price` must be `>= 0` (CHECK constraint).

### Delete behavior

- Deleting a **medicine**: straightforward delete, no dependents.
- Deleting a **category** or **manufacturer** that still has medicines assigned: **block the delete** and show an error (e.g. "Cannot delete category — N medicines still reference it. Reassign or delete them first."). This is enforced at the DB level with `ON DELETE RESTRICT` on both FKs, and the app checks first to give a friendly message rather than a raw DB error.

## Routes / controllers

| Method | Path | Purpose |
|---|---|---|
| GET | `/` | Dashboard / home |
| GET | `/medicines` | List all medicines |
| GET | `/medicines/:id` | View single medicine |
| GET | `/medicines/create` | Form: new medicine |
| POST | `/medicines/create` | Create medicine |
| GET | `/medicines/:id/update` | Form: edit medicine |
| POST | `/medicines/:id/update` | Update medicine |
| GET | `/medicines/:id/delete` | Confirm delete (with admin password field) |
| POST | `/medicines/:id/delete` | Delete medicine |
| GET | `/categories` | List categories |
| GET | `/categories/:id` | View category + its medicines |
| GET/POST | `/categories/create` | Create category |
| GET/POST | `/categories/:id/update` | Update category |
| GET/POST | `/categories/:id/delete` | Delete category (blocked if medicines reference it) |
| GET | `/manufacturers` | List manufacturers |
| GET | `/manufacturers/:id` | View manufacturer + its medicines |
| GET/POST | `/manufacturers/create` | Create manufacturer |
| GET/POST | `/manufacturers/:id/update` | Update manufacturer |
| GET/POST | `/manufacturers/:id/delete` | Delete manufacturer (blocked if medicines reference it) |

## Views

- `medicine/list`, `medicine/detail`, `medicine/form` (shared create/update)
- `category/list`, `category/detail`, `category/form`
- `manufacturer/list`, `manufacturer/detail`, `manufacturer/form`
- `shared/delete-confirm` (with admin password prompt)

## Admin protection

Destructive actions (delete, update) require an admin secret entered in the confirmation form, checked server-side against `ADMIN_PASSWORD` in `.env` before the action executes. Not a full auth system — just a gate until proper user auth is covered in a later lesson.

## Setup

1. Create the PostgreSQL database and run schema migrations (see `/db`).
2. Seed dummy data with the seed script (see `/db/seed.js`) — run once locally, then again after deploying.
3. `npm install && npm run dev`

## Roadmap

- [ ] Schema + migrations
- [ ] Seed script
- [ ] Routes & controllers
- [ ] Read views (list/detail)
- [ ] Create/update forms + validation
- [ ] Delete flow with restrict-on-dependents logic
- [ ] Admin password gate on destructive actions
- [ ] Styling
- [ ] Deploy

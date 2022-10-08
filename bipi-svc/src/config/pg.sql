CREATE TABLE "merchants" (
  "id" SERIAL PRIMARY KEY,
  "merchantName" varchar,
  "phoneNumber" varchar,
  "latitude" decimal,
  "longitude" decimal,
  "isActive" boolean,
  "recordedDateTime" timestamp
);

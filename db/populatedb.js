import { Client } from "pg";

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString:"postgresql://postgres:M$S9S%40aat@localhost:5432/inventory",
    });
    await client.connect();

    await client.query("CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,categoryName VARCHAR(255) NOT NULL );");
    await client.query("INSERT INTO category (categoryName) VALUES ('Guitar'),('Violin'),('Piano'),('Drums'),('Flute'),('Trumpet'),('Saxophone'),('Cello'),('Harp'),('Clarinet'),('Tabla'),('Sitar'),('Ukulele'),('Accordion'),('Banjo');");

    await client.query("CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,itemName VARCHAR(255),imgURL VARCHAR(255),description VARCHAR(255),quantity INTEGER,categoryId INTEGER REFERENCES category(id))");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Yamaha F310 Acoustic Guitar', 'https://loremflickr.com/640/480/acousticguitar', 'Beginner-friendly acoustic guitar with a natural finish.', 10, (SELECT id FROM category WHERE categoryName = 'Guitar'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Fender Stratocaster Electric Guitar', 'https://loremflickr.com/640/480/electricguitar', 'Versatile electric guitar suitable for rock and blues.', 5, (SELECT id FROM category WHERE categoryName = 'Guitar'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Classical Nylon String Guitar', 'https://loremflickr.com/640/480/classicalguitar', 'Classical guitar with nylon strings for warm tones.', 7, (SELECT id FROM category WHERE categoryName = 'Guitar'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Beginner Violin 4/4', 'https://loremflickr.com/640/480/violin', 'Full-size violin for students and beginners.', 8, (SELECT id FROM category WHERE categoryName = 'Violin'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Intermediate Acoustic Violin', 'https://loremflickr.com/640/480/violin,instrument', 'Acoustic violin designed for intermediate players.', 4, (SELECT id FROM category WHERE categoryName = 'Violin'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Solid Wood Violin', 'https://loremflickr.com/640/480/violin,wood', 'Wooden violin with a traditional design.', 6, (SELECT id FROM category WHERE categoryName = 'Violin'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Yamaha Digital Piano', 'https://loremflickr.com/640/480/digitalpiano', 'Digital piano with weighted keys for practice.', 4, (SELECT id FROM category WHERE categoryName = 'Piano'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Upright Acoustic Piano', 'https://loremflickr.com/640/480/uprightpiano', 'Traditional upright piano for home and studio use.', 2, (SELECT id FROM category WHERE categoryName = 'Piano'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Portable Electronic Keyboard', 'https://loremflickr.com/640/480/electronickeyboard', 'Portable keyboard with multiple instrument sounds.', 9, (SELECT id FROM category WHERE categoryName = 'Piano'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('5-Piece Acoustic Drum Kit', 'https://loremflickr.com/640/480/drumkit', 'Complete acoustic drum kit for rehearsals and performances.', 3, (SELECT id FROM category WHERE categoryName = 'Drums'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Electronic Drum Set', 'https://loremflickr.com/640/480/electronicdrums', 'Electronic drum kit with headphone support.', 4, (SELECT id FROM category WHERE categoryName = 'Drums'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Practice Snare Drum', 'https://loremflickr.com/640/480/snaredrum', 'Snare drum suitable for rhythm practice.', 12, (SELECT id FROM category WHERE categoryName = 'Drums'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Concert C Flute', 'https://loremflickr.com/640/480/concertflute', 'Silver-colored concert flute for beginners and students.', 8, (SELECT id FROM category WHERE categoryName = 'Flute'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Piccolo Flute', 'https://loremflickr.com/640/480/piccolo', 'Small high-pitched flute used in orchestras.', 3, (SELECT id FROM category WHERE categoryName = 'Flute'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Bamboo Bansuri', 'https://loremflickr.com/640/480/bansuri', 'Traditional bamboo flute for Indian classical music.', 15, (SELECT id FROM category WHERE categoryName = 'Flute'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Bb Student Trumpet', 'https://loremflickr.com/640/480/trumpet', 'Brass trumpet designed for student musicians.', 5, (SELECT id FROM category WHERE categoryName = 'Trumpet'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Professional Bb Trumpet', 'https://loremflickr.com/640/480/brasstrumpet', 'Performance trumpet with a bright, clear tone.', 2, (SELECT id FROM category WHERE categoryName = 'Trumpet'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Pocket Trumpet', 'https://loremflickr.com/640/480/pockettrumpet', 'Compact trumpet suitable for travel and practice.', 4, (SELECT id FROM category WHERE categoryName = 'Trumpet'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Alto Saxophone', 'https://loremflickr.com/640/480/altosaxophone', 'Alto saxophone suitable for students and jazz players.', 5, (SELECT id FROM category WHERE categoryName = 'Saxophone'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Tenor Saxophone', 'https://loremflickr.com/640/480/tenorsaxophone', 'Tenor saxophone with a rich, warm sound.', 3, (SELECT id FROM category WHERE categoryName = 'Saxophone'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Soprano Saxophone', 'https://loremflickr.com/640/480/sopranosaxophone', 'Smaller saxophone with a bright, high register.', 2, (SELECT id FROM category WHERE categoryName = 'Saxophone'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Student Cello 4/4', 'https://loremflickr.com/640/480/cello', 'Full-size cello for learning classical music.', 4, (SELECT id FROM category WHERE categoryName = 'Cello'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Intermediate Wooden Cello', 'https://loremflickr.com/640/480/cello,wood', 'Wooden cello designed for intermediate musicians.', 2, (SELECT id FROM category WHERE categoryName = 'Cello'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Electric Cello', 'https://loremflickr.com/640/480/electriccello', 'Electric cello for amplified performances.', 3, (SELECT id FROM category WHERE categoryName = 'Cello'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Lever Harp', 'https://loremflickr.com/640/480/leverharp', 'Compact harp suited to folk and classical music.', 3, (SELECT id FROM category WHERE categoryName = 'Harp'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Concert Pedal Harp', 'https://loremflickr.com/640/480/pedalharp', 'Large concert harp used in orchestral performances.', 1, (SELECT id FROM category WHERE categoryName = 'Harp'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Lap Harp', 'https://loremflickr.com/640/480/lapharp', 'Small harp designed for portable music making.', 6, (SELECT id FROM category WHERE categoryName = 'Harp'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Bb Student Clarinet', 'https://loremflickr.com/640/480/clarinet', 'Student clarinet for band and orchestral practice.', 7, (SELECT id FROM category WHERE categoryName = 'Clarinet'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Professional Wooden Clarinet', 'https://loremflickr.com/640/480/woodenclarinet', 'Wooden clarinet for advanced musicians.', 3, (SELECT id FROM category WHERE categoryName = 'Clarinet'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Bass Clarinet', 'https://loremflickr.com/640/480/bassclarinet', 'Low-register clarinet used in ensembles and orchestras.', 2, (SELECT id FROM category WHERE categoryName = 'Clarinet'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Pair of Concert Tablas', 'https://loremflickr.com/640/480/tabla,indian', 'Traditional dayan and bayan drums for Indian classical music.', 8, (SELECT id FROM category WHERE categoryName = 'Tabla'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Wooden Dayan Tabla', 'https://loremflickr.com/640/480/dayantabla', 'Smaller wooden tabla drum with a tuned pitch.', 6, (SELECT id FROM category WHERE categoryName = 'Tabla'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Brass Bayan Tabla', 'https://loremflickr.com/640/480/bayantabla', 'Metal-bodied bass tabla drum for percussion accompaniment.', 5, (SELECT id FROM category WHERE categoryName = 'Tabla'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Beginner Sitar', 'https://loremflickr.com/640/480/sitar', 'Traditional sitar suitable for students of Indian classical music.', 4, (SELECT id FROM category WHERE categoryName = 'Sitar'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Professional Concert Sitar', 'https://loremflickr.com/640/480/sitar,indian', 'Concert sitar with sympathetic strings and resonant sound.', 2, (SELECT id FROM category WHERE categoryName = 'Sitar'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Travel Sitar', 'https://loremflickr.com/640/480/sitar,instrument', 'Compact sitar designed for easier transport.', 3, (SELECT id FROM category WHERE categoryName = 'Sitar'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Soprano Ukulele', 'https://loremflickr.com/640/480/sopranoukulele', 'Small ukulele with a bright, cheerful sound.', 12, (SELECT id FROM category WHERE categoryName = 'Ukulele'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Concert Ukulele', 'https://loremflickr.com/640/480/concertukulele', 'Medium-sized ukulele with a fuller sound.', 8, (SELECT id FROM category WHERE categoryName = 'Ukulele'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Electro-Acoustic Ukulele', 'https://loremflickr.com/640/480/electricukulele', 'Ukulele with an output for amplified performances.', 5, (SELECT id FROM category WHERE categoryName = 'Ukulele'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Piano Accordion 32 Bass', 'https://loremflickr.com/640/480/accordion', 'Piano accordion suitable for folk and popular music.', 4, (SELECT id FROM category WHERE categoryName = 'Accordion'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Chromatic Button Accordion', 'https://loremflickr.com/640/480/buttonaccordion', 'Button accordion with a chromatic note layout.', 2, (SELECT id FROM category WHERE categoryName = 'Accordion'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Student Accordion', 'https://loremflickr.com/640/480/studentaccordion', 'Lightweight accordion for beginners.', 6, (SELECT id FROM category WHERE categoryName = 'Accordion'));");

    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('5-String Bluegrass Banjo', 'https://loremflickr.com/640/480/5stringbanjo', 'Five-string banjo designed for bluegrass music.', 5, (SELECT id FROM category WHERE categoryName = 'Banjo'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('4-String Tenor Banjo', 'https://loremflickr.com/640/480/tenorbanjo', 'Four-string banjo suitable for jazz and folk music.', 3, (SELECT id FROM category WHERE categoryName = 'Banjo'));");
    await client.query("INSERT INTO items (itemName, imgURL, description, quantity, categoryId) VALUES ('Open-Back Banjo', 'https://loremflickr.com/640/480/openbackbanjo', 'Open-back banjo designed for traditional folk playing.', 4, (SELECT id FROM category WHERE categoryName = 'Banjo'));");

    await client.end();
    console.log("done");
}
main();
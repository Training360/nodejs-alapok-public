# A NodeJS alapjai

A videókhoz tartozó kódok - ahol ilyen szerepelt -  külön mappákban megtalálhatók.  
Az egyes modulokhoz elérhető feladatokat az adott modul mappáján belül az `excercises` mappában találjátok.  
MInden feladathoz a `solution` mappákban megtalálhatóak a megoldások is önellenőrzés céljából.   

## Leckék és Gyakorló feladatok

** Bevezető**
1. A kurzus bemutatása
2. A NodeJS architektúrája, koncepciók
3. Előnyök, hátrányok, kik és mire használják
4. Szükséges programok telepítése, konfigurálása
5. [Az REPL használata](repl)
6. Új NodeJS projekt létrehozása
7. Projektbeállítások - ESLint, Gitignore, a node_modules mappa és a package fájlok
8. NodeJS fájlok futtatása és saját parancsok létrehozása
9. A global és a module objektumok
10. [Feladatok](repl/excercises)

**[A NodeJS modulrendszere (commonjs)](module-system)**
1. [Default export](module-system/default-export)
2. . [Named export](module-system/named-export)
3. [Named export object desctructuring használatával](module-system/named-export-with-destructuring)
4. [Privát adatok](module-system/private-parts)
5. [A module.exports és az exports közötti hasonlóságok](module-system/exports-vs-module.exports-similarities)
6. [A module.exports és az exports közötti különbségek](module-system/exports-vs-module.exports-differences)
7. [Az Object.freeze() metódus használata exportáláskor](module-system/object-freeze)
8. [A natív ES modulrendszer használata](module-system/es-module)
9. [Feladatok](module-system/excercises)

**[Az FS és a Path modul használata](fs)**
1. [Fájl beolvasása szinkron művelettel](fs/read-file-methods)
2. . [Fájl beolvasása aszinkron művelettel](fs/read-file-methods)
3. [Fájl írása](fs/basic-methods)
4. [Adatok hozzáfűzése a fájlhoz](fs/basic-methods)
5. [Metódusok összevonása, refaktorálás](fs/basic-methods-basic-methods-refactor)
6. [Fájl törlése](fs/other-methods)
7. [Fájl átnevezése](fs/other-methods)
8. [Fájl másolása](fs/other-methods)
9. [Fájl adatainak lekérdezése](fs/other-methods)
10. [Fájl jogosultságának módosítása](fs/other-methods)
11. [Több fájlművelet elvégzése](fs/multiple-file-operations)
12. [Fájlműveletek promise-ok használatával](fs/fs-promise)
13. [Több fájlművelet elvégzése promise-okkal](fs/multiple-file-operations-with-promises)
14. [Olvasható adatfolyamok - Readable stream](fs/readable-stream)
15. [Írható adatfolyamok - Writeable stream](fs/writeable-stream)
16. [Írható, olvasható, módosítható adatfolyamok - Transform stream](fs/transform-stream)
17. [Útvonalakkal kapcsolatos hasznos metódusok](path/useful-methods)
18. [A path resolve(), és join() metódusok használata és a __dirname változó](path/path-resolve-join-dirname)
19. [Mappaműveletek](fs/directory-operations)
20. [Feladatok](fs/excercises)

**[Az Events modul](events)**
1.  [Az eseménykibocsájtó (EventEmitter) működésének bemutatása](events/custom-eventemitter)
2.  [A beépített EventEmitter osztály](events/built-in-eventemitter)
3.  [Az EventEmitter osztály egyéb hasznos metódusai](events/other-eventemitter-methods)
4.  [Az EventEmitter osztály használata, FileReader készítése](events/eventemitter-example)
5.  [Az EventEmitter osztály használata, FileReader használata](events/eventemitter-example)
6.  [Az EventEmitter osztály kiterjesztése](events/extends-eventemitter)
7.  [Feladatok](events/excercises)

**[Az OS module](os)**
1. [Opereációs rendszerrel kapcsolatos adatok lekérdezése](os)

**[Parancssoros alkalmazás készítése a yargs modul használatával](yargs)** 
1. Az alkalmazás bemutatása
2. [A get parancs megírása](yargs/get-command)
3. [A create parancs megírása](yargs/create-command)
4. [Az edit parancs megírása](yargs/edit-command)
5. [Az remove parancs megírása](yargs/remove-command)
6. [Az alkalmazás struktúrálása - option factory készítése](yargs/option-factory)
7. [Az alkalmazás struktúrálása - movies service készítése](yargs/movie-service)
8. [Az alkalmazás struktúrálása - paraméterátadás objektumok átalakításával](yargs/parameter-destructuring)
9. [Az alkalmazás struktúrálása - movies api készítése](yargs/movies-api)
10. [Az alkalmazás struktúrálása - adatok mentése fájlba](yargs/write-database-file)
11. [Az alkalmazás struktúrálása - konfigurációs állomány használata](yargs/add-config)
12. [Feladatok](yargs/excercises)

**[Egységtesztelés](unit-testing-jest)** 
- Egységtesztelés és TDD elméleti bevezető
- [A Jest telepítése, beállítása, az első teszt megírása](unit-testing-jest/integers-floats-errors)
- A Jest extension és a watchAll kapcsoló
- [Lebegőpontos értékek tesztelése](unit-testing-jest/integers-floats-errors)
- [Kivétel tesztelése](unit-testing-jest/integers-floats-errors)
- Tesztlefedettség
- [Callback függvények tesztelése](unit-testing-jest/callbacks-and-mocks)
- [Aszinkron callback függvény tesztelése](unit-testing-jest/async-code-callback)
- [Promise-ok tesztelése](unit-testing-jest/promises)
- [Stub - tesztadatok](unit-testing-jest/stub)
- [Snapshot tesztelés](unit-testing-jest/snapshot-testing)
- [Parancssoros alkalmazás tesztelése - előkészítés](yargs/unit-testing)
- [Parancssoros alkalmazás tesztelése - a tesztek megírása](yargs/unit-testing)

**[A http modul](http)**
1. [Egyszerű webszerver létrehozása](http/basic-http-server)
2. [HTML válasz küldése](http/html-response)
3. [HTML válasz küldése stream használatával](http/html-response-stream)
4. [Változó behelyettesítése a HTML fájlba - templateing](http/templateing)
5. [Változó behelyettesítése a HTML fájlba - templateing adatfolyammal](http/templateing-with-stream)
6. [JSON válasz küldés a require használatával](http/json-response)
7. [JSON válasz küldés stream használatával](http/json-response-stream)
8. [Útvonalválasztás](http/routing-and-views)
9.  [Egyedi hiba oldal készítése](http/error-page)
10. [Az alkalmazás refaktorálása, route fájl készítése](http//route-file)
11. [Az alkalmazás refaktorálása, controller írása](http/controller)
12. [Események, környezeti változók, és a nodemon csomag](http/events-and-env)
13. [Feladatok](http/excercises)

**Projektzárás**
- Szemantikus verziószámozás
- Csomagok frissítése
- Csomagok auditálása, függőségek kezelése
- Egyéb hasznos npm parancsok

 
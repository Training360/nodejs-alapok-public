# A NodeJS alapjai

## Leckék és Gyakorló feladatok

### Bevezetés
Nincs kész:
1. Big Picture
2. Miről lesz szó, és miről nem?
3. A NodeJS koncepciók
4. A NodeJS arhitectura
5. A NodeJS előnyök, hátrányok
6. A NodeJS telepítése
7. A Nodejs parancssor: REPL
8. Az npm csomagkezelő alapjai
9. A package.json fájl felépítése
10. Szemantikus verziószámozás
11. Függőségek telepítése, az eslint beállítása
12. Hasznos npm parancsok
13. exercises
### A nodeJS használata
1. hello-nodejs

### A NodeJS modul rendszere (commonjs)
1. global-and-module-objects - A global és a module objektumok
2. module-object - A NodeJS modul rendszere: default export
3. named-export-full - A NodeJS modul rendszere: named export
4. named-export-desctructuring - A NodeJS modul rendszere: named export object desctructuring használatával
5. private-parts - A NodeJS modul rendszere - privát adatok
6. exports-vs-module.exports/similarities - module.exports vs exports - hasonlóságok
7. exports-vs-module.exports/differences - module.exports vs exports - különbségek
8. object.freeze - Az Object.freeze() használata exportáláskor
9.  es6-module - Az natív ES modulrendszer használata
10. exercises

###  Az fs modul - mappa és fájlműveletek
1. fs-basic-operation - Alapvető fájl műveletek
2. fs-other-methods - Egyéb hasznos metódusok
3. fs-promise - aszinkron fájlműveletek Promise-ok használatával
4. fs-open-callback - Összetett fájlműveletek, Buffer
5. fs-open-promise - Összetett fájlműveletek Promise-ok használatával
6. stream-readable - Stream-ek használata - a Readable Stream
7. stream-writeable - Stream-ek használata - a Writeable Stream
8. stream-transform - Stream-ek használata - a Transform Stream
9. fs-directory-operations - Mappaműveletek
10. example - Példaalkalmazás - A node_modules mappák rekurzív törlése
11. exercises

### A path modul - útvonalak kezelése (streamek után)
1. path/path-methods - Az útvonalakkal kapcsolatos fontosabb metódusok
2. path/path-join-resolve-dirname - A path.join(), a path.resolve(), és a __dirname közötti összehasonlítása

### Az events modul - eseménykezelés (fs-stream után)
1. event/custom-event-emitter - Saját eseménykezelő készítése
2. event/build-in-events-module - A beépített events modul használata
3. event/other-methods - Egyéb hasznos metódusok
4. event/example - Esemény vezérelt programozás példa
5. event/extends-event-emitter - Az EventsEmitter felhasználása saját osztályban
6. exercises
### Az os modul - operációs rendszer információk
1. os/os - Rendszerinformációk lekérdezése

### Egyszerű parancssoros alkalmazás - yargs
1. yargs/get - Rekordok lekérdezése parancssorból
2. yargs/find - Rekord keresése id alapján
3. yargs/create - Új rekord létrehozása
4. yargs/edit - Rekord szerkesztése
5. yargs/remove - Rekord törlése
6. yargs/add-option-factory - Az alkalmazás strukturálása: Option factory 
7. yargs/add-movies-service - Az alkalmazás strukturálása: MoviesService factory 
8. yargs/add-api - Az alkalmazás strukturálása: JSON fájl használata, elérése 
9. yargs/add-config - Az alkalmazás strukturálása: konfigurációs fájl létrehozása 
10. yargs/unit-testing - A MoviesService tesztelése 
11. yargs/async-version - Az alkalmazás átalakítása aszinkron verzióra 
12. exercises
### Unit tesztelés
0. Tesztelési alapok
1. testing/basic - A Jest alapjai
2. testing/callback - Callback függvények tesztelése
3. testing/function-mock - Függvények mockolása
4. testing/promise - Aszinkron függvények tesztelése
5. testing/stub - Stub adatok használata
6. testing/snapshot - Snapshot tesztelés

### Az http modul - webszerver készítése
1. http/basic-http-server - Egyszerű webszerver készítése
2. http/server-send-html - HTML fájlok kiszolgálása
3. http/server-send-stream - Streamek használata a http válasznál 
4. http/templateing - Saját template készítése - adatok írása a html fájlba 
5. http/templateing-with-stream - Streamek és a tempalte-ezés együttes használata 
6. http/server-send-json-with-require - JSON típusú válasz küldése
7. http/server-send-json-with-stream - JSON típusú válasz küldése Stream-el kombinálva
8. http/server-send-json-with-stream - Adat lekérése id alapján
9. http/routing-and-views - Útvonalválasztás (Routing)
10. http/error-page - Hibakezelés (Error handling)
11. http/route-file - Útvonalválasztás saját fájlba kiszervezve (Route file)
12. http/controller - At útvonal és a kérés/válasz kezelésének elszeparálása (Controller)
13. http/controller - A Nodemon csomag használata
14. exercises

### Az url modul
1. url/url - URL-ek kezelése

### Egyéb
Környezeti változók (http/controller után)
Debugging
Publishing

 
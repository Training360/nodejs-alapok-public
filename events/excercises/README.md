# Gyakorló feladat - EVENT modul

## 1. Feladat

Egy webes alkalmazás során mindig szükség van `Logger`-re.
Ennek a megvalósításhoz készítened kell egy  `Logger` class-t ami kiterjeszti az `EventEmitter` osztályt! 
A `Logger` 2 metódussal rendelkezzen: `error`, `success`!  Mindegyik metódus egy paraméterként kapott stringet ír ki a konzolra. Az `error` piros, a `success` zöld színnel! 

Ezt a Logger class-t kell felhasználod a következő alkalmazás során, melyet szintén neked kell elkészíteni:  
Az alkalmazás egy tetszőleges txt fájl tartalmát olvassa be  stream segítségével, majd átalakítja úgy, hogy mindegyik szó első karaktere nagybetűs lesz, a kimenetet pedig elmenti egy új fájlba, aminek a neve az eredeti fájl neve összefőzve a `Copy` stringgel. A kiterjesztés `.txt` maradjon.  
Amennyiben bármi hiba adódott a `Logger` error metódusát kell meghívni, paraméterként átadva neki az error object message propertyjének az értékét.  
Amennyiben nem volt hiba a Logger success metódusát kell meghívni, paraméterként átadva neki a következő stringet:
*"File transform successed!"*
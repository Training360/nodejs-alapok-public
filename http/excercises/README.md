# Gyakorló feladat - HTTP modul

## 1. Feladat
Hozz létre egy új NodeJS projektet!   
Készíts egy http szervert!
A szerver 8080-as port forgalmát figyelje! 
Készíts 3 html fájlt: 
- index 
- about 
- contact 
Minden alkalommal amikor beérkezik egy kérés, azt log-old a konzolra az alábbi formátumba:  
- Date: a kérés pontos ideje magyar lokalizáció szerint formázva, Url: a kért url, Method: a http metódus
Pl: `Date: 2021.04.01 Url: /about Method: GET`  

A log-ra saját függvényt írj!  
A `controller`, `views`, `routers` külön mappákban/fájlokban legyenek!  

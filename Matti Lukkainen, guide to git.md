# Week 1 assignments

The tasks are to be done either in the workshop or on their own. The deadline for returning assignments is Tuesday, March 19 at 11:59 p.m.

Assignments are returned using Github and Labtool. More on the return later. Some of the tasks do not appear in the return in any way. Failure to do so will result in a lack of expertise and may cause inconvenience later on.

2 points are available for weekly returns. Scoring is assessed based on the quality of the return.

Be sure to push the tasks into GitHub before the weekdeadline. Late returns will not earn points.

## Command line training

Despite the existence of graphical user interfaces, it is still very important in the software industry to control the use of the command line, or terminal.

## part 1

Learn to use the "sufficient" command line (see list below). Learning may be easiest by doing the first two parts of the online course at [https://www.codecademy.com/learn/learn-the-command-line ](https://www.codecademy.com/learn/learn-the-command-line)*Navigating the File System* and *Viewing and Changing the File System* (paid pro-episodes are not to be missed) .

**NOTE. Codecademy requires login with Facebook, Google or GitHub. The course uses GitHub anyway, so that ID should at least exist for everyone to be able to log in.**

After this task, you should master the following:

- concepts
- root directory
- home directory
- parent directory
- child directory
- working directory
- .. and *
- and know how to use commands
- pwd
- CD
- ls, ls -a, ls -l, ls -t
- mkdir
- touch
- cp
- rm, rm -r
- mv

You will need command line skills in this course and in your studies anyway.

## part 2

Contact ssh connection to linux server *melkki.cs.helsinki.fi* , *melkinpaasi.cs.helsinki.fi* or *melkinkari.cs.helsinki.fi* . On Linux and Mac, the connection is made from the command line with the command *ssh username @ server address* . Windows and SSH to connect to your successful example [putty has](http://www.putty.org/) .

After logging in to the plant server, perform the following steps:

- create your home directory index *courses*
- **HUOM** joidenkin kohdalla melkillä on ollut ongelmia kotihakemiston asetuksissa ja esim. hakemiston luomisen seurauksena on virhe 'permission denied'. Jos törmäät ongelmaan, lähetä viesti osoitteeseen *it-support@cs.helsinki.fi* ja raportoi ongelmaksi "ei oikeuksia kotihakemistoon melkillä"
- kokeile myös jos kirjaantuminen toiselle koneelle, esim. *melkinpaasi.cs.helsinki.fi* tuottaisi paremman tuloksen
- luo hakemistolle *kurssit* alihakemisto *ot2019*
- ja luomallesi hakemistolle alihakemisto *viikko1*
- mene kotihakemistoosi ja luo sen alle hakemisto *temp*
- mene hakemistoon *temp*
- hae osoitteessa *https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/misc/Unicafe.zip* oleva tiedosto [wget](https://en.wikipedia.org/wiki/Wget)-ohjelmalla
- wget toimii siten, että sille annetaan ladattava tiedosto parametriksi
- haettu tiedosto on *zip-paketti*, pura se *unzip*-ohjelmalla
- myös unzip toimii siten, että sille annetaan purettava tiedosto parametriksi
- komennon suorittamisen jälkeen hakemistoon on ilmestynyt hakemisto *Unicafe*
- siirrä hakemisto hakemiston *kurssit/ot2019/viikko1* alihakemistoksi
- poista zip-paketti
- poista hakemisto *temp*
- mene nyt uudessa paikassa olevaan hakemistoon *Unicafe*
- suorita komento *mvn clean*
- jos näet rivien joukossa ilmoituksen *BUILD SUCCESS* on tehtävä tehty

**Mene tämän jälkeen \*kotihakemistoon\* ja anna komento \*tree kurssit\*. Copypastea komennon tulostus talteen, tarvitset sitä myöhemmin.**

## tab complete

Komentoriviä käyttäessä kannattaa ehdottomasti totutella *tab-completen* käyttöön. *Tab* on näppäin, joka näyttää suunnilleen seuraavalta

![img](https://github.com/mluukkai/otm2016/raw/master/img/tab.jpg)

Tab:ia painamalla voit komentorivillä täydentää kirjoittamasi komennon nimen tai parametrin. Esim. jos olet siirtymässä hakemistoon nimeltään *ohjelmistotekniikka-kevat-2019*, riittää, että kirjoitat `cd oh` ja painat tabia. Jos hakemistossasi ei ole muita tiedostoja tai hakemistoja, jotka alkavat merkeillä *oh*, nimi täydentyy. Jos on, niin voit joutua kirjoittamaan merkin tai kaksi lisää. Jos tiedostoja on useampia etkä ole varma oikeasta nimestä, painamalla tabia useamman kerran näet mahdolliset vaihtoehdot.

Myös komentojen nimet voi täydentää tab-completella. Esim. haluat avat *chromium-browser* web-selaimen komentoriviltä, riittää että kirjoitat `chro` ja painat tabia. Komennon nimi täydentyy.

Ei pidä myöskään unohtaa *nuolta ylöspäin*. Sen avulla voit selata aiemmin kirjoittamiasi komentoja.

## yhtäaikaiset terminaalit / terminaalin tabit

Aloitteleva komentorivin käyttäjä pitää usein ainoastaan yhtä terminaali-ikkunaa kerrallaan auki. Useimmissa tilanteissa työtehosi moninkertaistuu, jos avaat useita terminaaleja näytöllä tai avaat yhteen terminaaliin useita "tabeja" eli välilehtiä. Uuden tabin saat avautumaan painamalla yhtä aikaa *ctrl*, *shift* ja *t* tai sovelluksen valikosta (joka laitoksen Linuxeissa sijaitsee ruudun yläreunassa).

## Versionhallinta

Tutustumme seuraavaksi versionhallintaan.

Mitä tarkoitetaan versionhallinnalla? Lainaus sivulta https://www.atlassian.com/git/tutorials

> Version control systems are a category of software tools that help a software team manage changes to source code over time. Version control software keeps track of every modification to the code in a special kind of database. If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake while minimizing disruption to all team members.

Vaikka ylläoleva puhuu versionhallinnasta ohjelmistotiimien yhteydessä, kannattaa versionhallintaa käyttää oikeastaan yhdenkin hengen projekteissa ja muunkinlaisen materiaalin, kuin koodin hallinnoimiseen. Esim. tämän kurssin kaikki materiaali on talletettu versionhallintaan.

Nykyään suosituin versionhallintaohjelmisto on [git](https://git-scm.com/). Tutustumme tänään gitin alkeisiin.

**HUOM** tämä tehtävä tulee tehdä Linuxilla tai Macilla, jolle on asennettu Git. Helpointa lienee tehdä tehtävä laitoksen koneella. Git kannattaa joka tapauksessa asentaa omalle koneelle. Gitin voi asentaa myös Windowsille.

## Gitin alkeet

### konfiguraatioita

Avaa terminaali omalla koneellasi. **Seuraavat tehtävät tehdään siis paikallisesti, ei melkillä!**

Määrittele gitille **oma nimesi** sekä **käyttämäsi email-osoite** antamalla komennot:

```
 git config --global user.name "Your Name"
 git config --global user.email you@example.com
```

Varmista komennolla `git config -l`, että määrittelyt menivät oikein.

Määritellään vielä git käyttämään sopivia värejä komennolla `git config --global color.ui` ja **vaihdetaan gitin käyttämäksi oletuseditoriksi** *nano* komennolla `git config --global core.editor nano`

- jos käytät vimiä, voit jättää oletuseditorin muuttamatta

Tee vielä seuraava konfiguraatio

```
git config --global push.default matching
```

Tämä liittyy *git push* -komennon oletusarvoiseen toiminnallisuuteen. Komennosta lisää myöhemmin.

### repositorio

Tee nyt sopiva hakemisto gitin harjoittelua varten ja mene hakemistoon, eli anna esim. komennot:

- mkdir ot_viikko1
- cd ot_viikko1

**HUOM:** varmista nyt että olet luomassasi hakemistossa, eli jos suoritat komennon *ls*, ei hakemistossa pitäisi olla mitään.

Luodaan hakemistosta paikallinen *git-repositorio* antamalla komento `git init`

Git ilmoittaa alustaneensa repositorion:

```
mluukkai@melkinpaasi:~/ot_viikko1$ git init
Initialised empty Git repository in /home/ad/fshome4/u4/m/mluukkai/Linux/ot_viikko1/.git/
```

Jos katsot hakemiston sisältöä komennolla `ls -la` huomaat, että hakemiston sisälle on ilmestynyt hakemisto `.git`. Git käyttää luotua hakemistoa pitääkseen kirjaa repositorioon talletetuista tiedostoista.

**HUOM** koska hakemiston nimi (*.git*) alkaa pisteellä, ei komento *ls* näytä sitä oletusarvoisesti. Parametri *a* näyttää myös pisteellä alkavat tiedostot ja hakemistot. Kokeile, miten *ls -a* ja *ls -la* eroavat toisistaan!

Pysy edelleen repositorion sisältävässä hakemistossasi *ot_viikko1*.

Luo hakemistoon tiedosto nimeltään *tiedosto.txt*, esim. komennolla `touch`. Luotuasi tiedoston, suorita komento `git status`:

```
mluukkai@melkinpaasi:~/ot_viikko1$ touch tiedosto.txt
mluukkai@melkinpaasi:~/ot_viikko1$ git status
On branch master

No commits yet

Untracked files:
  (use "git add ..." to include in what will be committed)

    tiedosto.txt

nothing added to commit but untracked files present (use "git add" to track)
mluukkai@melkinpaasi:~/ot_viikko1$
```

Git ilmoittaa, että on olemassa tiedosto, joka on tilassa *untracked*, eli tiedostoa ei ole lisätty versionhallinnan pariin.

Kuten komennon tuloste kertoo, tiedoston lisääminen gitin alaisuuteen (...to include in what will be committed) tapahtuu komennolla `git add tiedosto.txt`

Suorita lisäys ja sen jälkeen komento `git status`:

```
mluukkai@melkinpaasi:~/ot_viikko1$ git add tiedosto.txt
mluukkai@melkinpaasi:~/ot_viikko1$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached ..." to unstage)

    new file:   tiedosto.txt
```

Git kertoo nyt, että *tiedosto.txt* on niiden muutosten joukossa, jotka voidaan *commitoida*.

### commit

Commitoimisella tarkoitetaan tiedostojen ja hakemistojen sekä niihin liittyvien muutosten tallentamista *git-repositorioon*.

Suoritetaan commitointi antamalla komento `git commit -m "tiedosto.txt luotu"`

```
mluukkai@melkinpaasi:~/ot_viikko1$ git commit -m "tiedosto.txt luotu"
[master (root-commit) 0e12cfa] tiedosto.txt luotu
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 tiedosto.txt
```

Suorita jälleen komento `git status`

```
mluukkai@melkinpaasi:~/ot_viikko1$ git status
On branch master
nothing to commit, working directory clean
```

Git ilmoittaa, että *working directory clean*, eli hakemistosi on samassa tilassa kuin git-repositorio.

### working directory, index/staging, repository

**Muista käyttää tab-completea tehtäviä tehdessäsi!**

Kun teet muutoksia hakemistosi alla oleviin tiedostoihin (tai hakemistoihin), kohdistuvat muutokset *working directoryyn* eli työhakemistoon.

- Tee jokin muutos tiedostoon tiedosto.txt
- käytä tiedostojen editointiin *nano*-editoria. Editori käynnistyy komentoriviltä komennolla *nano tiedosto.txt*
- saat tallennettua nanossa tiedoston painamalla yhtä aikaa *ctrl* ja *o*
- editori sulkeutuu painamalla *ctrl* ja *x*
- Luo hakemistoon uusi tiedosto, nimeltään *toinen.txt*

Suorita jälleen `git status`

```
mluukkai@melkinpaasi:~/ot_viikko1$ git status
On branch master
Changes not staged for commit:
  (use "git add ..." to update what will be committed)
  (use "git checkout -- ..." to discard changes in working directory)

    modified:   tiedosto.txt

Untracked files:
  (use "git add ..." to include in what will be committed)

    toinen.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Git ilmoittaa nyt, että uusi tiedosto on *untracked* ja että aiemmassa tiedostossa on muutoksia, jotka eivät ole *staged for commit*.

Toimitaan ohjeen mukaan eli lisätään muutokset ja uusi tiedosto commitoitavien joukkoon. Molempien tiedostojen yhtäaikainen "addaaminen" onnistuu komennolla `git add .`

Tarkistetaan taas tilanne komennolla `git status`

```
mluukkai@melkinpaasi:~/ot_viikko1$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD ..." to unstage)

    modified:   tiedosto.txt
    new file:   toinen.txt
```

Sekä muutos että uusi tiedosto ovat nyt valmiina committoitavaksi.

Committointi onnistuu komennolla *git commit*. Kuten edelliselläkin kerralla, annetaan komennolle parametrina *commit-viesti*, eli merkkijono, joka kuvaa mitä muutoksia uusi commit tuo edelliseen nähden:

```
git commit -m"muutos ja lisäys"
```

Tarkasta committoinnin jälkeen jälleen tilanne komennolla *git status*.

**HUOM** jos suoritat commitoinnin vahingossa ilman commit-viestiä, eli parametria *-m*, avaa git tekstieditorin ja olettaa että haluat kirjoittaa commit-viestin editoriin. Jos et määritellyt alun ohjeen mukaan gitille editoriksi nanoa, avautuu oletusarvoinen editori *vim* ja joudut kenties googlaamaan, miten pääset pois editorista.

Tiedostot ja niihin tehdyt muutokset voivat siis olla gitin suhteen *kolmessa eri tilassa*.

- Aluksi tiedostot (tai niihin tehdyt muutokset) ovat vain *working directoryssä* ja git ei noteeraa niitä ennen kuin ne lisätään komennolla `git add`
- Tämän jälkeen tiedostot ovat valmiina commitoitavaksi. Gitin terminologian mukaan valmiina committoitavaksi olevat tiedostot ovat *staging*-alueella
- Komento `git commit` siirtää stagingissa olevat muutokset repositorioon eli luo uuden *commitin*

Seuraava kuva havainnollistaa sitä, miten tiedoston *tila* vaihtuu git-komentoja tekemällä.

![img](https://github.com/mluukkai/otm2016/raw/master/img/lh3-2.png)

Kun tiedosto luodaan, menee se gitin *working directoryyn*. Komennolla *git add* tiedosto siirtyy *staging*-alueelle, eli valmiiksi committointia varten. Stagingissa oleva tiedosto viedään (eli "commitoidaan") repositorioon komennolla *git commit*. Kun committoitua tiedostoa taas editoidaan, menevät muutokset jälleen *working directoryyn*.

## git commit

Jokainen komennon *git commit* suorittaminen siis synnyttää repositorioon uuden commitin, eli uuden "tilan". Komennolla `git log` on mahdollista nähdä, mitä committeja repositorio sisältää:

```
mluukkai@melkinpaasi:~/ot_viikko1$ git log
commit 6aff75ab51d14d7cb9a72867ba13d9782d06c7ff (HEAD -> master)
Author: Matti Luukkainen 
Date:   Sun Oct 7 19:33:32 2018 +0300

    muutos ja lisäys

commit 9e6a83d058c9564e8a390f8766845d45b365f360
Author: Matti Luukkainen 
Date:   Sun Oct 7 19:32:12 2018 +0300

    tiedosto.txt luotu
mluukkai@melkinpaasi:~/ot_viikko1$
```

Gitin logi kertoo jokaisen commitin ajan, tekijän, viestin ja *tunnisteen*. Tunnisteita käytetään, jos on esim. tarvetta palata johonkin vanhan commitin tilaan.

Voit selata logia nuolinäppäimillä. Pääset ulos *git log*:ista painamalla *q*.

## lisää harjoittelua

Muista käyttää komentoa *git status* mahdollisimman usein. Älä myöskään unohda tab-completea!

- Luo tiedosto *kolmas.txt*
- Lisää se commitoitavaksi ja commitoi
- Muuta tiedostojen *toinen.txt* ja *kolmas.txt* sisältöä ja commitoi muutokset
- Luo hakemisto *stuff* ja sen sisälle jokin tiedosto
- Lisää muutokset committoitavaksi ja committoi
- Huomaa, että hakemiston lisääminen riittää, sen sisältämät tiedostot tulevat automaattisesti lisätyksi
- Katso miltä git-logi näyttää

## gitk

Gitin committeja voi tarkastella myös graafisella *gitk*-komennolla (OSX:lle ja Windowsille vastaava työkalu on [Sourcetree](https://www.sourcetreeapp.com/)). Suorita komento repositoriossa:

![img](https://github.com/mluukkai/otm2016/raw/master/img/lh3-1.png)

Vasemmalla yläkulmassa näet kaikki commitit. Uusin tilanne ylimpänä. Uusimman commitin nimi on *master*. Klikkaamalla commitia, näet muissa ikkunoissa commitiin liittyviä tietoja. Oikealla alakulmassa näet ne tiedostot, jotka ovat muuttuneet commitissa (jos valinta on *patch*) tai ne tiedostot, joita repositoriossa oli olemassa commitin aikana (jos valinta on *tree*). Vasemmassa alakulmassa pystyt tarkastelemaan commitin tiedostoihin tekemiä muutoksia tai tiedostojen tilaa commitin aikana. Valinnat ovat hieman hämäävät, sillä ne toimivat eri tavoin riippuen oikean puolen moodista.

Vastaava näkymä OSX:n [Sourcetree](https://www.sourcetreeapp.com/)-ohjelmalla tarkasteltaessa:

![img](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/web/images/lh1-1a.png)

Seuraavaa tehtävää tekiessäsi kannattaa terminaaliin avata uusi välilehti, jotta voit pitää gitk:ta käynnissä.

- Kopioi tiedostoon *tiedosto.txt* jostain paljon tekstiä ja commitoi tiedosto
- Poista nyt osa tiedoston tekstistä ja lisää tiedostoon hieman lisää tekstiä
- commitoi muutosten jälkeen
- Päivitä gitk:n näkymä (file/update) ja katso miten muutokset näkyvät (tarkastele kahta ylintä committia)
- valitse oikeasta alakulmasta *patch* ja vasemmasta *diff*
- näin näet commitin aiheuttamat muutokset [diff](https://fi.wikipedia.org/wiki/Diff)-muodossa
- jos oikealta on valittuna *tree*, näkyy vasemmalla puolella (valinnasta riippumatta) tiedostojen commitin aikainen tilanne
- Jos käytät sourcetreetä, sen pitäisi päivittyä automaattisesti ja näyttää muutos *diff*-muodossa

## tiedoston poistaminen ja uudelleennimentä

- Poista tiedosto *toinen.txt*
- suorita *git status*
- commitoi muutos
- poista ensin tiedosto gitin alaisuudesta komennolla *git rm*
- varmista komennolla *git status*, että kaikki on niinkuin kuuluukin
- muuta tiedoston *tiedosto.txt* nimeksi *eka.txt*
- uudelleennimentä tapahtuu komennolla *mv*
- suorita *git status*
- miten git käsittelee uudelleennimennän?
- commitoi muutos

## git add -p

- Tee jotain muutoksia tiedostoihin *eka.txt* ja *kolmas.txt*
- tee sekä lisäyksiä että poistoja
- lisää ne commitoitavaksi komennolla *git add -p*
- git näyttää nyt jokaisen tekemäsi muutoksen *patch*-muodossa ja pyytää varmistamaan lisätäänkö muutos commitoivaksi
- hyväksy painamalla *y* ja enter
- commitoi muutokset
- tee tiedostoihin tehtyjen muutosten commitoitavaksi lisääminen *aina* komennolla *git add -p*, näin pääset tarkastamaan, että muutokset ovat juuri ne mitä oletat olevasi lisäämässä
- Huomaa, että kokonaan uudet tiedostot eivät siirry committoitavaksi komennolla *git add -p*

## muutosten peruminen

Joskus tiedostoihin tulee tehtyä muutoksia, jotka on tarpeen perua

- tee nyt joku muutos tiedostoon *eka.txt*, **älä** lisää tiedostoa committoitavaksi
- suorita komento *git status*

```bash
mluukkai@melkinpaasi:~/ot_viikko1$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   eka.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Kuten oletettua, git kertoo että olemme tehneet muutoksia, jotka eivät ole "staged for commit", eli lisättyjä commitoitavaksi.

- Päätetäänkin perua muutokset. Se onnistuu komennolla `git checkout -- eka.txt`
- Kun suoritat uudelleen komennon *git status* huomaat, että working directory ei enää sisällä muutoksia:

```bash
mluukkai@melkinpaasi:~/ot_viikko1$ git checkout -- eka.txt
mluukkai@melkinpaasi:~/ot_viikko1$ git status
On branch master
nothing to commit, working directory clean
```

- Varmista vielä, että tiedoston sisältö on sama kuin ennen muutoksia

Myös stagingiin viety eli valmiina committoitavaksi oleva muutos voidaan perua.

- Tee muutoksia tiedostoon *kolmas.txt* ja lisää se committoitavaksi. **Älä** kuitenkaan committoi.
- git statuksen pitäisi näyttää seuraavalta

```
mluukkai@melkinpaasi:~/ot_viikko1$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    modified:   kolmas.txt

mluukkai@melkinpaasi:~/ot_viikko1$
```

Ohje muutoksen perumiseen löytyy git statuksen tulosteesta.

- suorita muutokset peruva komento `git reset HEAD kolmas.txt`
- katsotaan jälleen *git status*

```
mluukkai@melkinpaasi:~/ot_viikko1$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   kolmas.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Tiedosto ei siis enää ole *staged*-tilassa, muutokset ovat kuitenkin *working directoryssä*, eli jos katsot tiedoston sisällön, muutokset ovat vielä olemassa

- pääset perumaan muutokset kokonaan antamalla komennon `git checkout -- kolmas.txt`
- varmista, että tiedosto on palannut muutoksia edeltävään tilaan

Seuraavassa tiedoston tilaa kuvaava kaavio täydennettynä, eli jos tiedosto on lisätty committoitavaksi, eli se on *staged*, voidaan muutos perua komennolla *git reset HEAD*. Tällöin muutokset kuitenkin vielä jäävät tiedostoon, eli ovat *working directoryssä*. Tiedosto saadaan palautettua repositoriossa olevaan edellisen commitin tilaan komennolla *git checkout*.

![img](https://github.com/mluukkai/otm2016/raw/master/img/lh3-3.png)

## Harjoittelua

- luo repositiosi sisälle hakemisto *tiedostoja* ja hakemiston sisälle tiedostot *file1*, *file2* ja *file3*
- commitoi muutokset
- muista miten pystyt lisäämään kokonaisen hakemiston sisällön committoitavaksi yhdellä komennolla
- muuta tiedoston *file1* sisältöä ja poista tiedosto *file2*
- peru muutokset!
- muuta tiedoston *file3* sisältöä, lisää commitoitavaksi
- peru muutokset!
- poista tiedosto *file1* ja uudelleennimeä tiedosto *file2* tiedostoksi *file22*
- committoi

Suorita repositoriossa komento *git log --stat | cat* ja **ota komennon tulos talteen**, tulet tarvitsemaan sitä myöhemmin!

## GitHub

Gitin käytöstä on toki hyötyä jo harjoittelemallammekin tavalla, eli muodostamalla paikallisen koneen hakemistosta repositorio. Pääsemme kuitenkin nauttimaan kertaluokkaa suuremmista hyödyistä liittämällä repositoriomme internetissä olevaan *etärepositorioon*. Etärepositorion kautta repositorion tiedostot on helppo jakaa useiden koneiden tai/ja useiden käyttäjien kesken.

Internetin johtava paikka etärepositorioiden tallettamiseen on [GitHub](https://github.com/)

Ennen GitHubin käytöönottoa, tee uusi git-repositorio paikalliselle koneelle, seuraavassa oletetaan että hakemiston nimi on *ot-harjoitustyo*.

**HUOM: älä luo uutta repositoriota aiemmin tekemäsi harjoitusrepositorion sisälle!**

Esim. seuraavat komennot siirtyvät kotihakemistoon, luovat sen alle hakemiston *ot-harjoitustyo*, siirtyvät hakemistoon, alustavat sen git-repositorioksi sekä lisäävät ja commitoivat yhden tiedoston repositorioon:

```
cd 
mkdir ot-harjoitustyo
cd ot-harjoitustyo
git init
touch README.md
git add .
git commit -m"initial commit"
```

Siirrytään sitten GitHubin käyttöön

- Luo itsellesi tunnus GitHubiin (ellei sinulla jo ole tunnusta)
- Luo uusi repositorio
- uuden repositorion luomistoiminto löytyy vasemman ylänurkan plus-symboolin alta
- **Älä laita rastia** kohtaan *Initialize this repository with a README*

![img](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/web/images/lh1-2a.png)

- luo repositorio painamalla vihreää *Create repository* -nappia

Seuraavaksi haluamme liittää GitHubiin luodun repositorion juuri luodun paikallisen koneen repositorion *ot-harjoitustyo* etärepositorioksi.

- etärepositorion lisääminen onnistuu GitHubiin avautuvan näkymän ohjeiden mukaan
- varmista, että kohdasta "Quick setup..." on valittu **SSH**

![img](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/web/images/lh1-3a.png)

- kopioi ylempi rivi kohdasta *...or push an existing repository from the command line*
- omassa esimerkissäni rivi on

```
git remote add origin git@github.com:mluukkai/ot-harjoitustyo.git
```

- pastea rivi komentoriville ja suorita komento painamalla enter
- suorita komento *git remote -v*
- tulostus kertoo, että githubin etärepositorio on liitetty paikalliseen repositorioosi nimellä *origin*

```bash
mluukkai@melkki:~/ot-harjoitustyo$ git remote  -v
origin    git@github.com:mluukkai/ot-harjoitustyo.git (fetch)
origin    git@github.com:mluukkai/ot-harjoitustyo.git (push)
```

- *origin* on etärepositorion oletusarvoinen nimi. Nimi voi olla mikä tahansa ja etärepositorioitakin voi olla useita
- voimme siirtää paikallisen repositoriomme tilan etärepositorioon komennolla *git push*
- saatat joutua tekemään ensimmäisen pushin pidemmässä muodossa *--set-upstream origin master*
- kokeillaan

```bash
mluukkai@melkki:~/ot-harjoitustyo$ git push --set-upstream origin master
Warning: Permanently added the RSA host key for IP address '192.30.253.112' to the list of known hosts.
Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

## Julkinen avain

Jos olet jo asettanut julkisen avaimen esim. Tietokantojen perusteissa, pushauksen pitäisi toimia ja voit siirtyä [seuraavaan kohtaan](https://github.com/mluukkai/ohjelmistotekniikka-kevat2019/blob/master/tehtavat/viikko1.md#kertausta).

Pushaus ei toimi. Nyt kyse on siitä, että git haluaisi suorittaa [julkisen avaimen](https://the.earth.li/~sgtatham/putty/0.55/htmldoc/Chapter8.html) autentikoinnin. Se ei kuitenkaan onnistu koska emme ole kertoneet gitille julkista salausavaintamme.

- luo salausavain antamalla komentoriviltä komento *ssh-keygen*
- voit vastata kaikkiin kysymyksiin enterillä
- syntyy kaksi salausavainta, salainen ja julkinen. Ne sijoitetaan kotihakemistosi alla olevaan hakemistoon *.ssh*
- mene hakemistoon ja katso hakemiston sisältöä
- tiedosto *id_rsa.pub* sisältää julkisen avaimen, se on tarkoitus kopioida githubiin jotta avaimeen perustuva kirjautuminen onnistuisi
- näet tiedoston sisällön komennolla *cat id_rsa.pub*
- anna komentoriviltä komento *ssh-add*
- mene GitHubin asetussivulle klikkaamalla oikean yläkulman symbolista ja valitsemalla *settings*
- valitse settingseistä *SSH and GPG keys*
- luo uusi *SSH-avain*
- anna avaimelle joku *title* (esim. laitos) ja kopioi tiedoston id_rsa.pub sisältö kohtaan *key*
- Suorita uudelleen push:

```
mluukkai@melkki:~/ot-harjoitustyo$ git push
Counting objects: 3, done.
Writing objects: 100% (3/3), 213 bytes | 106.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
remote:
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/mluukkai/ot-harjoitustyo/pull/new/master
remote:
To github.com:mluukkai/ot-harjoitustyo.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.
```

- nyt kaikki näyttää toimivan

## Lisää tiedostoja

- tee juuri luodun repositorion sisälle hakemisto *laskarit*
- ja sen sisälle hakemisto *viikko1*
- Komentorivitehtävien lopussa oli kehotus: Mene tämän jälkeen kotihakemistoon ja anna komento tree kurssit. *Copypastea komennon tulostus talteen, tarvitset sitä myöhemmin*
- Tee hakemiston *laskarit/viikko1* sisälle tiedosto *komentorivi.txt* ja kopioi sinne komennon *tree* tulos
- Edellisen tehtäväsarjan lopussa kehoitettiin tallentamaan harjoitusrepositoriossa annetun komennon *git log --stat | cat* tulos
- Tee hakemiston *laskarit/viikko1* sisälle tiedosto *gitlog.txt* ja kopioi sinne githarjoittelun tulos
- Kirjoita jotain tekstiä hakemiston juuressa olevaan tiedostoon README.md
- muotoile tekstisi [markdown-notaatiota](https://guides.github.com/features/mastering-markdown/) käyttäen
- tee tiedostoon esim. jokin otsikko, tavallista tekstiä, joka sisältää lihavoituja ja kursivoituja osuuksia
- näemme pian tekstin ruudulla muotoiltuna
- commitoi muutokset
- muista aina commitoinnin yhteydessä *lisätä* tiedosto/muutokset commitoitavaksi
- pushaa koodi githubiin komennolla *git push*

## Tiedostot GitHubissa

- mene GitHub-repositoriosi sivulle
- käytännössä tämä tapahtuu uudelleenlataamalla repositorion luomisen jälkeen avautunut sivu
- huomaat että tiedostot näkyvät nyt repositorion sivulla. Sivulle renderöityy repositorion juuressa olevan README.md:n sisältö markdown-muotoiltuna
- voit editoida repositoriossa olevia tiedostoja suoraan GitHubin editorilla menemällä tiedoston sivulle ja painamalla kynäsymbolia
- tee README.md:hen linkit repositorion hakemistossa *laskarit/viikko1/* oleviin tiedostoihin *komentorivi.txt* ja *gitlog.txt*
- ohje linkin muodostamiseen löytyy [täältä](https://guides.github.com/features/mastering-markdown/)
- tiedostojen urlin saat navigoimalla GitHubissa tiedostoon ja kopioimalla osoitteen selaimen osoiteriviltä
- Repositoriosi tulee näyttää suunnilleen seuraavalta

![img](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/web/images/lh1-4a.png)

- jos teit kaiken oikein, pääset README.md:ssä olevia linkkejä klikkaamalla näkemään linkitettyjen tiedostojen sisällön

## Paikallisen repositorion ajantasaistaminen

- GitHubissa tekemämme muutokset ovat tehneet etärepositorioon uuden commitin
- Etärepositorio on nyt *edellä* paikallista repositorioamme
- Saamme tuotua muutokset paikalliselle koneelle komennolla *git pull*
- Kokeile komentoa ja varmista, että muuttunut sisältö on nyt paikallisessa repositoriossa

## Lisää githubia

- Tee paikallisella koneella jokin muutos esim. tiedostoon README.md
- Lisää ja committaa muutos
- Vie muutokset GitHubiin komennolla *git push*
- Varmista GitHubista että muutokset näkyvät
- Paikallinen repositoriosi ja GitHubin etärepositorio ovat jälleen samassa tilassa.

## Paikallisen ja etärepositorion epäsynkrooni

- joskus käy niin, että paikallinen ja etärepositorio menevät epäsynkroniin, siten että molempiin tehdään yhtäaikaa uusi commit
- luodaan tälläinen tilanne
- tee paikalliseen repositorioon muutos tiedostoon *README.md*, lisää ja committoi muutos
- **älä** pushaa muutosta GitHubiin
- tee GitHubiin muutos **johonkin muualle** kuin README.md-tiedostoon
- editoi siis esim. tiedostoa *gitlog.txt* hieman suoraan GitHubissa
- yritä nyt pushata paikallisen repositorion muutokset githubiin
- seurauksena on virheilmoitus

```
mluukkai@melkki:~/ot-harjoitustyo$ git push
To git@github.com:mluukkai/ot-harjoitustyo.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:mluukkai/ot-harjoitustyo.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
mluukkai@melkki:~/ot-harjoitustyo$
```

- Tulet törmäämään tähän varmaan useasti jatkossakin.
- Ongelma ei ole paha. Koska paikalliset ja GitHubin muutokset ovat kohdistuneet **eri tiedostoihin**, selviämme helpolla
- ensin pullaamme muutokset paikalliseen repositorioon komennolla *git pull*
- pullaaminen synnyttää ns. merge commitin, jolle joudumme määrittelemään commit-viestin avautuvaan editoriin
- oletusarvoinen viesti käy, eli riittää että poistut editorista tallentaen muutokset
- ja pushaamme ne uudelleen githubiin
- nyt paikallinen ja etärepositorio ovat taas synkroonissa
- katso repositorion tilaa nyt komennolla *gitk*
- näet, että repositorion uusimmalla commitilla on nyt kaksi edeltäjää, paikallinen commit ja etärepositorion commit

![alt text](https://github.com/mluukkai/otm2016/raw/master/img/lh5-3.png)

Jos muutokset olisivat kohdistuneet samaan tiedostoon, olisi syntynyt hieman vakavampi tilanne, eli *merge-konflikti*. Konfliktit on pakko selvittää itse editorin avulla. On toki olemassa työkaluja, mergetooleja, jotka auttavat konfliktin selvittämisessä. Emme kuitenkaan mene tällä kurssilla merge-konflikteihin.

Nyrkkisääntönä kannattaa pitää aina sitä, että kun rupeat työskentelemään paikallisessa repositoriossa, pullaa ensin kaikki muutokset etärepositoriosta. Ja kun lopetat työskentelyn, pushaa muutokset etärepositorioon. Näin konflikteja ei yhden ihmisen työskentelyssä todennäköisesti tule.

## Labtool

Now register your own data and the repository you created in [Labtool](https://studies.cs.helsinki.fi/labtool/courses/TKT20002.2019.K.K.1) . Choose *Software Engineering as the* course if you have to make a choice.

Labtool will also ask about the topic of the assignment, if you are not sure about your topic yet you can change the name of the topic later.

## More gits

The basic use of Git will definitely become familiar during the course. Of course, it is worth continuing to study the more advanced features of Git on your own. There are a large number of more or less good tutorials on the Internet. Here are a few links

- https://www.atlassian.com/git/tutorials/
- [http://learngitbranching.js.org](http://learngitbranching.js.org/)
- [http://ohshitgit.com](http://ohshitgit.com/)

- [Week 1 assignments](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#0)

- - [Command line training](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#1)

  - [part 1](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#2)

  - [part 2](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#3)

  - [tab complete](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#4)

  - [simultaneous terminals / terminal tabs](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#5)

  - [version control](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#6)

  - [The beginnings of Git](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#7)

  - - [configurations](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#8)
    - [repositorio](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#9)
    - [commit](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#10)
    - [working directory, index / staging, repository](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#11)

  - [git commit](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#12)

  - [more practice](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#13)

  - [gitk](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#14)

  - [file deletion and renaming](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#15)

  - [git add -p](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#16)

  - [revocation of changes](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#17)

  - [training](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#18)

  - [GitHub](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#19)

  - [Public key](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#20)

  - [More files](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#21)

  - [Files on GitHub](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#22)

  - [Updating the local repository](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#23)

  - [More githubia](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#24)

  - [Asynchronous local and remote repository](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#25)

  - [Labtool](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#26)

  - [More gits](https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/master/tehtavat/viikko1.md#27)
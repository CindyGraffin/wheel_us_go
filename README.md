![Bannière contenant le logo de Wheel Us Go, représenté par un poulet kawaï.](./src/assets/images/banniere.png?style=center)

# WHEEL US GO :poultry_leg:	

![GitHub last commit](https://img.shields.io/github/last-commit/CindyGraffin/wheel_us_go?label=Last%20Commit&logo=GitHub) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/CindyGraffin/wheel_us_go?label=Monthly%20Commits&logo=GitHub) ![GitHub contributors](https://img.shields.io/github/contributors/CindyGraffin/wheel_us_go?label=Collaborators)

Wheel Us Go est une application web centrée sur la planification et l'organisation de sorties entre famille, amis ou amoureux, au restaurant, dans les bars ou «chez soi». 


## A propos du projet :arrow_down: 
  
### :ledger: Fonctionnalités
  
**Qui seront présentes dans le MVP (Minimum Viable Product):** 

- Profil utilisateur avec photo 
- Badges de récompenses (par exemple «Un début à tout !» pour la prmeière sortie organisée, ou encore «Adepte des bars» après 10 participations à une sortie bar)
- Création de salles (restaurant, bar ou «chez soi»)
- Choix du lieu, soit défini, soit par vote ou en alétoire en permettant aux invités d'ajouter des propositions 
- Ajout de la date et de l'heure 
- Invitations d'autres personnes dans la salle
- Possibilité d'ajouter un dresscode ou de choisir qui paye l'apéro parmis les personnes invitées grâce à une roue aléatoire
- Ajout d'amis
  
**Fonctionnalités futures:**
- Messagerie instantanée, entre deux personnes ou en groupe
- Fonction premium permettant l'accès à des recettes de cuisine ou boissons inédites, sur des thèmes différents
- Visiter le profil d'autres utilisateurs
- Recherche d'utilisateurs et visite de leur profil
  
## How to use :bulb: 

### :eyes: Cloner le projet
  
Avant de pouvoir commencer à travailler sur le projet, il est nécessaire de le cloner.

````
git clone https://github.com/CindyGraffin/wheel_us_go.git // clone le projet en local
````
  
### :cactus: Les branches
   
**Convention de nomage:**

**<branch_type>/<branch_name>** : Il faut nommer ses branches de cette façon, par exemple *feature/navbar*. On utilisera deux types de branches:
- **feature**: pour le développement d'une nouvelle fonctionnalité ou d'un composant
- **bug**: lorsque vous constatez un bug sur votre branche, créer une branche bug à partir de celle-ci, par exemple *bug/navbar*
  
:exclamation: Avant de créer une nouvelle branche ne provenant pas d'une fonctionnalité existante, il faut se placer sur la branche remote dev, **on ne crée pas de branche à partir de la branche main**. Pour ajouter des fonctionnalités à une branche déjà créée autre que dev, il faut créer une branche à partir de la branche de la fonctionnalité correspondante et non à partir de la branche dev.
  
**Exemple:** *je dois produire la Navbar qui contient x items différents.*   

- *Je commence par créer ma branche "navbar"*

````
git checkout dev // Je me positionne sur la branche dev, si je l'ai déjà en local
OU git fetch PUIS git pull origin dev PUIS git checkout dev // Je récupère la branche distante "dev" puis me place dessus
git checkout -b feature/navbar dev // Je crée ma branche "navbar" à partir de la branch "dev" et me positionne dessus
git branch // Je vérifie que je suis bien sur la branche "navbar"
````
- *Je crée une branche "navbar_item" à partir de la branche "navbar" afin de travailler sur le composant item qui représentera un item unique de ma navbar* 
````
git checkout -b feature/navbar_item feature/navbar // Je crée ma branche "navbar_item" à partir de la branch "navbar" et me positionne dessus
git branch // Je vérifie que je suis bien sur la branche "navbar_item"
````
  
:exclamation: **Une branche = Une fonctionnalité ou un composant**    

:sos: Rappel des commandes git concernant les branches et utiles au projet:  

````
git branch // Voir les branches existantes
git checkout -b new_branch_name existing_branch_name // permet de créer une branche à partir d'une autre branche existante
git branch branch_name // Crée une branche avec le nom de "branch_name"
git checkout branch_name // Se positionne sur la branche "branch_name"
git checkout -b branch_name //Crée une branche et se positionne dessus
git fetch // Permet de télécharger le contenu du repos distant sur la branche
git pull origin remote_branch_name // Permet de se placer sur une branche remote existante et d'en récupérer le contenu
git push -u origin remote_branch_name // Push la branche locale sur laquelle on se trouve sur la branche remote ayant pour nom "remote_branch_name"
git branch -d branch_name // Supprime la branche "branch_name", à utiliser SEULEMENT une fois le travail mergé avec une autre branche
git merge branch_to_merge // permet de merger la branche "branch_to_merge" sur la branche sur laquelle on se trouve 
````
  
### :floppy_disk: Les commits

**Convention d'écriture du commentaire:**

"*commit_type(feature_name): courte description :gitmoji:*"

Il existe deuc type de commit:
- **feat**: pour un commit concernant le développement d'une nouvelle fonctionnalité ou d'un composant
- **fix**: lorsqu'un commit concerne la résolution d'un bug

Retrouvez les gitmojis sur ce lien: [gitmoji.dev](https://gitmoji.dev/)
  
**Rappel:** *Réaliser un commit*

````
git add file1 file2 file3 // Permet d'ajouter les fichiers à commit
git commit -m "feat(navbar): création du composant navbar :sparkles:" // Permet de commit les changements apportés à la navbar
git push -u origin remote_branch_name // Permet de pusher les changements qui ont été commits sur le dépôt distant
````

## 👤 Collaborateurs
  
:woman: **Cindy Graffin**   
Github: [CindyGraffin](https://github.com/CindyGraffin)  
LinkedIn: [Cindy Graffin](https://www.linkedin.com/in/cindygraffin/)  
Mail: [graffincindy@gmail.com](graffincindy@gmail.com)  

:man: **Anthony Labesse**   
Github: [StudioAzur](https://github.com/StudioAzur)  
LinkedIn: [Anthony Labesse](https://www.linkedin.com/in/anthonylabesse/)  
Mail: [alnetweb59@gmail.com](alnetweb59@gmail.com)  

:man: **Boubacar Sidiky DEMBELE**   
Github: [BoubaM2i](https://github.com/BoubaM2i)  
LinkedIn: [Boubacar Sidiky DEMBELE](https://www.linkedin.com/in/boubacar-sidiky-dembele-974b53176/)  
Mail: [boubacabko@gmail.com](boubacabko@gmail.com)  

:man: **Sofian Mejeddar**   
Github: [aceovic](https://github.com/aceovic)  
LinkedIn: [Sofian Mejeddar](https://www.linkedin.com/in/sofian-mejeddar/)  
Mail: [alphfa@hotmail.com](alphfa@hotmail.com)  
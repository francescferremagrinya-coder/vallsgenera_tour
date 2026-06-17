# Tour Virtual 360° — Plantilla

Plantilla base per crear tours virtuals 360° autoallotjats a GitHub Pages.

## Com fer servir per a un client nou

1. Crea un nou repositori buit a GitHub
2. Descarrega aquesta branca `template` com a ZIP (botó verd «Code» → «Download ZIP»)
3. Descomprimeix i puja els fitxers al nou repositori
4. Activa GitHub Pages (Settings → Pages → branca `main`, carpeta `/`)
5. Obre `studio.html` en local per editar el tour
6. Personalitza escenes, hotspots, logo i nadir des del Studio
7. Exporta `scenes.json` i puja-ho al repositori
8. El tour públic estarà a `https://NOM_USUARI.github.io/NOM_REPOSITORI/`

## Personalitzar

- **Escenes**: afegeix/elimina escenes i hotspots des del Studio
- **Logo** (mosca): puja un PNG amb transparència des del panell esquerre del Studio
- **Nadir** (tapador trípode): puja un PNG des del panell esquerre del Studio
- **Mapa**: edita `index.html` → busca `maps.google.com/maps?q=` → canvia `0.0,0.0` per les coordenades reals
- **Imatge de benvinguda** (splash): substitueix `images/landing.jpg` per la del client
- **Colors**: edita `:root` a `style.css` per canviar `--primary`

## Tecnologies

- Three.js r134 (CDN)
- IndexedDB per a emmagatzematge local de fotos 360°
- localStorage per a escenes, logo i nadir
- GitHub Pages per a allotjament gratuït (fins a 1 GB per repositori)

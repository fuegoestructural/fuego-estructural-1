# FUEGO ESTRUCTURAL — Web académica

Sitio web estático en HTML, CSS y JavaScript. Preparado para publicarse gratuitamente con GitHub Pages.

## Contenido
- `index.html`: página principal.
- `styles.css`: diseño adaptable a móviles, tabletas y escritorio.
- `script.js`: menú móvil y activación de enlaces sociales.
- `social-config.js`: aquí se añaden las URL de los cinco perfiles.
- `assets/`: logotipo y banner de Fuego Estructural.

## Antes de publicar
1. Abre `social-config.js`.
2. Sustituye cada cadena vacía por la URL real de Instagram, TikTok, YouTube, Facebook y X.
3. Revisa el texto y las imágenes.
4. Mantén visible el aviso de proyecto académico simulado.

Ejemplo:
```js
window.FUEGO_SOCIAL = {
  instagram: "https://www.instagram.com/usuario/",
  tiktok: "https://www.tiktok.com/@usuario",
  youtube: "https://www.youtube.com/@usuario",
  facebook: "https://www.facebook.com/usuario",
  x: "https://x.com/usuario"
};
```

## Publicar gratis en GitHub Pages
1. Crea o inicia sesión en https://github.com/.
2. Crea un repositorio nuevo, por ejemplo `fuego-estructural`.
3. Puedes elegir visibilidad **Public** (necesaria para GitHub Free Pages en este uso).
4. Sube todos los archivos y carpetas de este paquete, conservando la estructura.
5. En el repositorio, entra en **Settings → Pages**.
6. En **Build and deployment**, elige **Deploy from a branch**.
7. Selecciona la rama `main` y la carpeta `/ (root)` y pulsa **Save**.
8. Espera a que GitHub publique la web. La dirección tendrá este formato:
   `https://TU-USUARIO.github.io/fuego-estructural/`

La primera publicación puede tardar unos minutos. GitHub Pages admite sitios estáticos y HTTPS. No necesitas contratar hosting ni dominio propio.

## Aviso académico y seguridad
Este sitio es un proyecto simulado. No es un servicio público, no forma parte del 112, no recibe avisos ni ofrece asistencia. No se deben publicar datos personales, imágenes identificables de víctimas ni información operativa sensible. En una emergencia real en la Comunitat Valenciana, llama al 112 y sigue las indicaciones oficiales.

## Referencias de diseño
- 112 Comunidad de Madrid: https://www.comunidad.madrid/112
- 112 Comunitat Valenciana: https://www.112cv.gva.es/es/
- Departament d'Interior de Catalunya — xarxes socials: https://interior.gencat.cat/ca/xarxes_socials/

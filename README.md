# El Diablo y Florentino

Landing estática de muestra para la exposición de Planificación de negocios. Reutiliza la identidad y las imágenes del PDF final del equipo.

## Ver localmente

Con Ruby y Bundler: `bundle install` y `bundle exec jekyll serve`.

Jekyll procesa `index.md`, aplica la plantilla `_layouts/home.html` y genera `_site/index.html`. Para ver la página correctamente, usá el servidor de Jekyll; abrir los archivos fuente directamente no procesa las plantillas Liquid.

## Contenido

Portada, juego, capturas ampliables, lore, pacto, comunidad, apoyos, press kit descargable y FAQ. El menú se adapta a celulares y la galería admite teclado y Escape. Las fuentes se sirven localmente, sin depender de Google Fonts durante la exposición.

Es una muestra visual: no guarda mails, no hay tienda publicada, demo descargable, redes oficiales ni cobros. Esas secciones muestran Próximamente. El press kit sí descarga imágenes y una ficha del proyecto.

## Archivos

- `index.md`: página de entrada con front matter y layout `home`.
- `_layouts/home.html`: diseño de la landing y rutas procesadas por Jekyll.
- `assets/css/landing.css`: paleta y estilos adaptados a celulares.
- `assets/js/landing.js`: menú y galería.
- `assets/img/game/`: imágenes del PDF del equipo, en WebP.
- `assets/press-kit.zip`: imágenes y ficha para la muestra.
- `assets/fonts/`: Cinzel, Crimson Pro y licencias OFL.

## Jekyll y publicación

La portada usa una plantilla local de Jekyll y no depende de un tema remoto. Las rutas de imágenes, estilos, scripts y descarga usan el filtro `relative_url`. La configuración contempla el subdirectorio /el-diablo-y-florentino. Para dominio propio, ajustar url y baseurl.

El presupuesto del PDF menciona Carrd; esta muestra usa el repositorio Jekyll pedido por el equipo. Si se adopta como solución definitiva, revisar ese rubro en futuras versiones del presupuesto.

El material gráfico proviene de la presentación del equipo. La licencia MIT heredada de Agency no otorga derechos sobre las imágenes del juego.

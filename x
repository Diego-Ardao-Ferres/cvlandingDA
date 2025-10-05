# crear estructura
mkdir -p assets/css assets/js assets/img assets/pdf

# mover archivos (ajusta rutas si hoy están en Assests/)
mv Assests/CV_7_2025.pdf assets/pdf/ || true
mv Assests/foto_cv_JJOO.jpg assets/img/ || true

# si tu foto está en PDF, conviértela a JPG/PNG (recomendado).
# Si no puedes ahora, súbela como PDF y luego cambiamos el <img> por <object>.

# crear/editar CSS y JS
$EDITOR assets/css/styles.css
$EDITOR assets/js/script.js
$EDITOR index.html

git add .
git commit -m "Estructura robusta: assets/ + rutas relativas"
git push

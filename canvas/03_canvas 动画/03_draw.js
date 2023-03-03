window.onload = function () {
  const el = document.querySelector('.part')
  if (!el.getContext) return;
  const ctx = el.getContext('2d')
  requestAnimationFrame(draw)
  // 获取到图片
  const sum = new Image()
  const di = new Image()
  const yue = new Image()
  sum.src = '../images/canvas_sun.png'
  yue.src = '../images/canvas_moon.png'
  di.src = '../images/canvas_earth.png'

  function draw() {
    const second = new Date().getSeconds()
    const millSecond = new Date().getMilliseconds()
    ctx.clearRect(0, 0, 300, 300);
    ctx.save()

    // 1.绘制太阳背景
    // 2. 绘制圆形轨道
    ctx.save()
    ctx.drawImage(sum, 0, 0)
    ctx.beginPath()
    ctx.translate(150, 150)
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
    ctx.arc(0, 0, 103, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.restore()

    // 3. 绘制地球
    ctx.save()
    ctx.translate(150, 150)
    ctx.rotate(Math.PI * 2 / 60 * second + Math.PI * 2 / 60 / 1000 * millSecond)
    ctx.translate(105, 0)
    ctx.drawImage(di, -14, -14)
    // 4. 绘制月球
    ctx.save()
    ctx.rotate(Math.PI * 2 / 10 * second + Math.PI * 2 / 10 / 1000 * millSecond)
    ctx.translate(0, 28)
    ctx.drawImage(yue, -7, -7)
    ctx.restore()
    ctx.restore()

    ctx.restore()

    requestAnimationFrame(draw)

  }
}
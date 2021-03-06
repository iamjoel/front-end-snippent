import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/规则/变形(Transform)',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => `
<div class="transform-page">
  <h2>旋转(rotate)</h2>
    <div class="rotate block">rotate(20deg) 以Z轴为旋转轴旋转 与 rotateZ(20deg)等效</div>
    <div class="rotate-x block">rotateX(50deg) 以X轴为旋转轴旋转（90deg时，高度为0）</div>
    <div class="rotate-y block">rotateY(50deg) 以Y轴为旋转轴旋转（90deg时，宽度为0）</div>
    <div class="rotate-z block">rotateZ(50deg) 以Z轴为旋转轴旋转</div>
    <div class="rotate-3d block">rotate3d(1, 2, 3, 45deg) 和 rotate3d(10, 20, 30, 45deg)</div>
    <div class="rotate-3d2 block">rotate3d(1, 2, 3, 45deg) 和 rotate3d(10, 20, 30, 45deg)</div>

    <h2>缩放(scale)</h2>
    <div class="scale block">scale(2, 1.5)</div>
    <div class="scale-x block"></div>
    <div class="scale-z block"></div>

    <h2>斜交(skew)</h2>
    <div class="skew block">skew(10deg)</div>
    <div class="skew-x block">skewX(10deg)</div>
    <div class="skew-y block">skewY(10deg)</div>

    <h2>位移(Translate)</h2>
    <div class="translate block">translate(250px, 10px)</div>
    <div class="translate-x block">translateX(300px)</div>
    <div class="translate-z block">transform: translateZ(1000px) 没什么变化</div>


    <h2>一起使用</h2>
    <div class="composite block"></div>

    <h2>transfrom与z-index</h2>
    <div class="block" style="position:relative;z-index:100;">被设置了z-index的</div>
    <div class="block transform-cover">transform对象,z-index和想象中一样工作</div>
</div>
`

Main.story = {
  name: '基础用法'
}
const p = (x) => {console.log(x)}

p('js linked')

const colorStep = (e) => {
  p(e);
  $(`#${e}`).css('background-color','limegreen');

}

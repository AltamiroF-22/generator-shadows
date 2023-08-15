class BoxShadowGenerator {
  constructor(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule,
    color,
    radius,
    radiusRef,
    borderRad
  ) {
    this.horizontal = horizontal;
    this.horizontalRef = horizontalRef;
    this.vertical = vertical;
    this.verticalRef = verticalRef;
    this.blur = blur;
    this.blurRef = blurRef;
    this.spread = spread;
    this.spreadRef = spreadRef;
    this.previewBox = previewBox;
    this.rule = rule;
    this.webkitRule = webkitRule;
    this.mozRule = mozRule;
    this.color = color;
    this.radius = radius;
    this.radiusRef = radiusRef;
    this.borderRad = borderRad;

  }

  initialize() {
    this.horizontalRef.value = this.horizontal.value;
    this.verticalRef.value = this.vertical.value;
    this.spreadRef.value = this.spread.value;
    this.blurRef.value = this.blur.value;
    this.color.value = this.color.value;
    this.radiusRef.value = this.radius.value;

    this.applyRule();
    this.showRule();
  }

  applyRule() {
    this.previewBox.style.boxShadow = `${this.horizontalRef.value}px ${this.verticalRef.value}px  ${this.blurRef.value}px ${this.spreadRef.value}px ${this.color.value}`;
    this.previewBox.style.borderRadius = `${this.radius.value}%`;
    this.currentRule = this.previewBox.style.boxShadow;
    this.currentRadius = this.previewBox.style.borderRadius;
  }

  showRule() {
    this.rule.innerText = this.currentRule;
    this.webkitRule.innerText = this.currentRule;
    this.mozRule.innerText = this.currentRule;

    this.borderRad.innerText = this.currentRadius;

    colorsShow.textContent = color.value;
    spreadRef.textContent = spreadRef.value;
    horizontalRef.textContent = horizontalRef.value;
    verticalRef.textContent = verticalRef.value;
    blurRef.textContent = blurRef.value;
    radiusRef.textContent = radiusRef.value;
  }

  updateValue(type, value) {
    switch (type) {
      case "horizontal":
        this.horizontalRef.value = value;
    }
    switch (type) {
      case "vertical":
        this.verticalRef.value = value;
    }
    switch (type) {
      case "color":
        this.color.value = value;
    }

    switch (type) {
        case "radius":
        this.radiusRef.value = value;
    }

    switch (type) {
      case "blur":
        this.blurRef.value = value;
    }
    switch (type) {
      case "spread":
        this.spreadRef.value = value;
    }
    this.applyRule();
    this.showRule();
  }
}

// Seleção de elementos

const colorsShow = document.querySelector(".colors-show > span");
const color = document.getElementById("color");
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");
const borderRad = document.querySelector('#borderRad > span');
const radius = document.querySelector('#radius');
const radiusRef = document.querySelector('#radius-value');

const rulesArea = document.querySelector('#rules-area')

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

const BoxShadow = new BoxShadowGenerator(
  horizontal,
  horizontalRef,
  vertical,
  verticalRef,
  blur,
  blurRef,
  spread,
  spreadRef,
  previewBox,
  rule,
  webkitRule,
  mozRule,
  color,
  radius,
  radiusRef,
  borderRad
);

BoxShadow.initialize();

//Eventos

horizontal.addEventListener("input", (e) => {
  const value = e.target.value;

  BoxShadow.updateValue("horizontal", value);
});

vertical.addEventListener("input", (e) => {
  const value = e.target.value;

  BoxShadow.updateValue("vertical", value);
});

blur.addEventListener("input", (e) => {
  const value = e.target.value;

  BoxShadow.updateValue("blur", value);
});

spread.addEventListener("input", (e) => {
  const value = e.target.value;

  BoxShadow.updateValue("spread", value);
});

color.addEventListener("input", (e) => {
  const value = e.target.value;
  BoxShadow.updateValue("color", value);
});

radius.addEventListener("input", (e) => {
    const value = e.target.value;
    BoxShadow.updateValue("radius", value);
});


rulesArea.addEventListener('click', () => {
  const rules = `box-shadow:${rule.textContent}`; 
  const mozRules = `-moz-box-shadow:${mozRule.textContent}`; 
  const webkitRules = `-webkit-shadow:${webkitRule.textContent}`;
  const radiusCopy = `border-radius:${borderRad.textContent}`;

  const valuesToCopy = `${rules}\n${mozRules}\n${webkitRules}\n${radiusCopy}`;

  const ruleAlert = document.querySelector('.rule-alert');

  navigator.clipboard.writeText(valuesToCopy)
    .then(() => {
    ruleAlert.classList.add('copysuccess');
    ruleAlert.textContent = 'Valores copiados para a área de transferência!'
   
      console.log(valuesToCopy);
    })
    .catch((error) => {
      console.error('Erro ao copiar valores: ', error);
    });
    ruleAlert.classList.remove('copysuccess');
    ruleAlert.textContent = ''
    
});
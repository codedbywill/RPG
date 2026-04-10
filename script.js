  let hp = 38;
  function changeHP(value) {
    hp += value;
    if (hp < 0) hp = 0;
    document.getElementById('hp').innerText = hp;
  }
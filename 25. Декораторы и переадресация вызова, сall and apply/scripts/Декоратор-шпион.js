function spy(func) {
  this.calls = 1;
  console.log(this);
}

spy();

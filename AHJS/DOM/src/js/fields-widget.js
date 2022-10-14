export default class FieldsWidget {
  constructor(elements) {
    this.elements = elements;
  }

  get allElements() {
    return this.elements;
  }

  deactivateField() {
    // const activateField = this.elements.querySelect('.active');
    const activateField = [...this.elements].find(n => n.classList.contains('active'));
    if (activateField !== undefined) {
      activateField.classList.remove('active');
    }
  }

  activateField(numField) {
    // const newActiveField = this.elements.querySelector(`[id=${numField}]`);
    const newActiveField = [...this.elements].find(n => n.classList.contains(`el-${numField}`));
    if (newActiveField !== undefined) {
      newActiveField.classList.add('active');
    }
  }
}

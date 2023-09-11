const dialog = document.getElementById("myDialog");

const handleSubmit = () => {
  const startingNo = parseInt(document.getElementById('start').value);
  const endingNo = parseInt(document.getElementById('end').value);
  if(dialog.open) closeHandler()
   else getPrimesInRange(startingNo, endingNo);
};

const getPrimesInRange = (lowerNumber, higherNumber) => {
  const startTimeMs = new Date().getMilliseconds();

  const tableOneNode = document.createElement('table');
  const tHeadOneNode = document.createElement('thead');
  const tBodyOneNode = document.createElement('tbody');
  tBodyOneNode.setAttribute('id', 'normal-tbody');
  const tableOneHeadNodeOne = document.createElement('th');
  const tableOneHeadNodeTwo = document.createElement('th');
  const tableOneHeadNodeThree = document.createElement('th');
  const valueOneHeadOne = document.createTextNode('Number');
  const valueOneHeadTwo = document.createTextNode('Result');
  const valueOneHeadThree = document.createTextNode('Time in ms');

  tableOneHeadNodeOne.appendChild(valueOneHeadOne);
  tableOneHeadNodeTwo.appendChild(valueOneHeadTwo);
  tableOneHeadNodeThree.appendChild(valueOneHeadThree);
  tHeadOneNode.appendChild(tableOneHeadNodeOne);
  tHeadOneNode.appendChild(tableOneHeadNodeTwo);
  tHeadOneNode.appendChild(tableOneHeadNodeThree);
  tableOneNode.appendChild(tHeadOneNode);
  tableOneNode.appendChild(tBodyOneNode);
  dialog.appendChild(tableOneNode);

  const tableNode = document.createElement('table');
  const tHeadNode = document.createElement('thead');
  const tBodyNode = document.createElement('tbody');
  tBodyNode.setAttribute('id', 'prime-tbody');
  const tableHeadNodeOne = document.createElement('th');
  const tableHeadNodeTwo = document.createElement('th');
  const valueHeadOne = document.createTextNode('Number');
  const valueHeadTwo = document.createTextNode('Time in ms');

  tableHeadNodeOne.appendChild(valueHeadOne);
  tableHeadNodeTwo.appendChild(valueHeadTwo);
  tHeadNode.appendChild(tableHeadNodeOne);
  tHeadNode.appendChild(tableHeadNodeTwo);
  tableNode.appendChild(tHeadNode);
  tableNode.appendChild(tBodyNode);
  dialog.appendChild(tableNode);

  // 1 and 0 are neither prime not composite
  for (let i = lowerNumber; i <= higherNumber; i++) {
    const primeOrNotStartTime = new Date().getMilliseconds();

    if (i === 1 || i === 0) {
      console.log(i);
      continue;
    }
    let flag = false;

    // looping from 2 to i to check if i is divisble by j
    // if so its not prime
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = true;
        break;
      }
    }

    // there are 2 loops so complexity is O(n2)
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && !flag) {
      const primeNoTimeMs = new Date().getMilliseconds();
      const totalTimeMs = primeNoTimeMs - startTimeMs;
      const primeTbody = document.getElementById('prime-tbody');

      console.log('prime time in ms for ', i, '  ', totalTimeMs);

      const tableRowNode = document.createElement('tr');
      const tableDataOne = document.createElement('td');
      const tableDataTwo = document.createElement('td');
      const valueOne = document.createTextNode(i);
      const valueTwo = document.createTextNode(totalTimeMs);
      tableDataOne.appendChild(valueOne);
      tableDataTwo.appendChild(valueTwo);
      tableRowNode.appendChild(tableDataOne);
      tableRowNode.appendChild(tableDataTwo);
      primeTbody.append(tableRowNode);
      dialog.appendChild(tableNode);
    }
    const primeNoTimeMs = new Date().getMilliseconds();
    const totalTimeMs = primeNoTimeMs - startTimeMs;

    console.log(' time taken regardless --  ', i, '  ', totalTimeMs);
    const normalTbody = document.getElementById('normal-tbody');

    const tableRowNode = document.createElement('tr');
    const tableDataOne = document.createElement('td');
    const tableDataTwo = document.createElement('td');
    const tableDataThree = document.createElement('td');
    const valueOne = document.createTextNode(i);
    const valueTwo = document.createTextNode(flag ? 'Normal' : 'Prime');
    const valueThree = document.createTextNode(totalTimeMs);
    tableDataOne.appendChild(valueOne);
    tableDataTwo.appendChild(valueTwo);
    tableDataThree.appendChild(valueThree);
    tableRowNode.appendChild(tableDataOne);
    tableRowNode.appendChild(tableDataTwo);
    tableRowNode.appendChild(tableDataThree);
    normalTbody.append(tableRowNode);
    dialog.appendChild(tableNode);
  }

  const endTimeMs = new Date().getMilliseconds();
  const totalTimeMs = endTimeMs - startTimeMs;

  console.log('3. time taken to run all instances in ms -> ', totalTimeMs);
  dialog.show()
};

const closeHandler = () => {
  const tableNodeOne = document.getElementsByTagName('table')[0];
  const tableNodeTwo = document.getElementsByTagName('table')[1];
  dialog.removeChild(tableNodeOne);
  dialog.removeChild(tableNodeTwo);
  dialog.close();
}

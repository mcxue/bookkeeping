import {useState} from 'react';



const useRecords = ()=>{
  const [records,setRecords] = useState([]);
  const saveRecords = (records: RecordItem[])=>{
    window.localStorage.setItem('localRecords',JSON.stringify(records))
  };
  const addRecord = (oneRecord: RecordItem)=>{
    const newRecords = JSON.parse(JSON.stringify(records));
    newRecords.push(oneRecord);
    setRecords(newRecords);
    console.log("newRecords");
    saveRecords(newRecords);
  };
  return {records,addRecord}
};

export {useRecords}
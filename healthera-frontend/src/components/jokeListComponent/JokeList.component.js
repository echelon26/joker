import React from 'react';
import MaterialTable from 'material-table';

export default function JokeList(props) {
  let columns = [
    { title: 'Title', field: 'title' },
    { title: 'Creation_Date', field: 'creation_date' },
    { title: 'Updation_Date', field: 'updation_date' }
  ]
  return (
    
    <MaterialTable
      title="Healthera"
      columns={columns}
      data={props.jokes.jokes}
      editable={{
        onRowAdd:  joke =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            props.createJoke(joke);
          }, 600);
        }),
        onRowUpdate: joke =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            props.updateJoke(joke);
          }, 600);
        }),
        onRowDelete: joke =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              props.removeJoke(joke);
            }, 600);
          })
      }}
    />
  );
}

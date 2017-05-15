import {} from './main.scss';
import AppComponent from './components/app.component';
import Storage from './utils/storage';
// import InfoService from './utils/info.service';

// const m = new InfoService();
// m.updateQuery('oauth');
// m.getData(10)
//   .then(
//     (data) => { console.log(data); },
//     (error) => { console.log(error); },
//   );
// setTimeout(() => {
//   m.next();
//   m.getData(10)
//    .then(
//       (data) => { console.log(data); },
//       (error) => { console.log(error); },
//     );
// }, 1000);

const storage = new Storage();

new AppComponent({
  container: document.getElementById('app'),
  storage,
}).appRender();

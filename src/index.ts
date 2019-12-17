import { getSlaData, getConfigurations, getToken, setToken } from './trello-util';
import { getRunningSlas, updateConfigs } from './util';

declare const TrelloPowerUp: any;
declare const Trello: any;

window.Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  // Button to open settings 
  'board-buttons': function (t) {
    return [{
      icon: {
        dark: `${window.location}img/stopwatch.svg`,
        light: `${window.location}img/stopwatch.svg`,
      },
      text: 'SLAs',
      callback: (): void => t.modal({
        url: './settings.html',
        height: 360,
        fullscreen: false,
        title: 'SLAs for Trello'
      }),
      condition: 'edit'
    }];
  },
  // Show running SLAs on front of card
  'card-badges': function (t) {
    return getToken(t).then(token => {
      if (!token) {
        return [];
      }
    
      return getConfigurations(t).then(configs => {
        if (!configs) {
          return [];
        }

        return getSlaData(t).then((data) => {
          updateConfigs(t, configs, data || {});
          return !data ? [] : getRunningSlas(data, configs, false);
        });
      });
    });
  },
  // Show running and completed SLAs on back of card
  'card-detail-badges': function (t) {
    return getToken(t).then(token => {
      if (!token) {
        return [];
      }
      return getSlaData(t).then((data) => {
        if (!data) {
          return [];
        }
        return getConfigurations(t).then((configs) => {
          return !configs ? [] : getRunningSlas(data, configs, true);
        });
      });
    });
  },
  'authorization-status': function(t, options){
    return getToken(t)
    .then(function(authToken) {
      return { authorized: authToken != null }
    });
  },
  'show-authorization': function(t, options){
    return t.popup({
      type: 'confirm',
      title: 'Authorize SLAs for Trello',
      mouseEvent: event,
      message: 'Please authenticate to get started with SLAs for Trello.',
      confirmText: 'Authorize',
      onConfirm: () => {
        Trello.authorize({
          type: "popup",
          name: "SLAs for Trello",
          expiration: "never",
          return_url:"https://emgoto.github.io/trello-sla/", 
          success: () => {
            setToken(t, Trello.token());
          },
          error: () => { },
        });
      },
    });
  }  
},
  {
    appKey: '652d72f229f65b3457533bd55fdcf436',
    appName: 'SLAs for Trello'
  });

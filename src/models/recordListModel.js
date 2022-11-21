// 建立模型
const localStorageKeyName = 'recordList'
const recordListModel = {
  fetch(){
    return JSON.parse(window.localStorage.getItem(localStorageKeyName)|| '[]') 
  },
  save(data){
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(data))
  }
}

export default recordListModel
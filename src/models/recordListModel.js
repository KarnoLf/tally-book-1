// 建立模型
const localStorageKeyName = 'recordList'
const recordListModel = {
  fetch(){
    return JSON.parse(window.localStorage.getItem(localStorageKeyName)|| '[]') 
  },
  remove(id){
    let index = 0
    for(let i = 0;i<this.data.length;i++){
      if(this.data[i].createdAt === id){
        index = i
        break
      }
    }
    this.data.splice(index,1)
    this.save()
    return true
  },
  save(data){
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(data))
  }
}

export default recordListModel
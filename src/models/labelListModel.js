// 建立模型
const localStorageKeyName = 'labelList'
const labelListModel = {
  data:[],
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName)|| "[]") 
    return this.data
  },
  create(name){
    const names = this.data.map(item => item.name)
    if(names.indexOf(name)>= 0){
      return false
    }
    this.data.push({id:new Date().getTime(),name:name})
    this.save()
    return true
  },
  remove(id){
    let index = 0
    for(let i = 0;i<this.data.length;i++){
      if(this.data[i].id === id){
        index = i
        break
      }
    }
    this.data.splice(index,1)
    this.save()
    return true
  },
  save(){
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data))
  }
}

export default labelListModel
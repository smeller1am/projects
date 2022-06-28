document.addEventListener('DOMContentLoaded', async () => {
  const thead = document.getElementById('thead')
  const userCard = document.getElementById('user__card')
  const userForm = document.getElementById('user__card_form')
  const closeBtn = document.getElementById('user__card_close_btn')
  const closeChangeCard = document.getElementById('close_change_card')
  const nameInput = document.getElementById('name')
  const surNameInput = document.getElementById('surname')
  const lastNameInput = document.getElementById('lastname')
  const tbody = document.getElementById('table_body')
  const clientAddBtn = document.getElementById('user__btn')
  const changeCard = document.getElementById('user__change_card')
  const surnameChangeIput = document.getElementById('surname_input')
  const nameChangeInput = document.getElementById('name_input')
  const lastNameChangeInput = document.getElementById('lastName_input')
  const changeSaveBtn = document.getElementById('save_btn')
  const headerInput = document.getElementById('header_input')
  const changeCardId = document.getElementById('change_card_id')
  const contactsBtn = document.getElementById('contacts_btn')
  const contactsSection = document.getElementById('contacts_section')
  const changeDeleteClient = document.getElementById('change_delete_btn')
  const addClientContactsButton = document.getElementById('add_client_contacts_button')
  const addContactsSection = document.getElementById('add_contacts_section')
  const select = document.getElementsByClassName('select')
  const cancel = document.getElementById('cancel_btn')

  
  async function getData() {
    const response = await fetch('http://localhost:3000/api/clients', {
      method:'GET'
    })
    let data = await response.json()
    return data
  }
  let data = await getData()
  createTable()
  async function addClient(obj) {
    await fetch('http://localhost:3000/api/clients', { 
      method:'POST',
      body: JSON.stringify(obj)
    })
  }

  async function getClientByID(id) {
    const response = await fetch (`http://localhost:3000/api/clients/${id}`, {
      method:'GET'
    })
    let data = await response.json()
    return data
  }

  async function changeClient(id, obj) {
    const response = await fetch (`http://localhost:3000/api/clients/${id}`, {
      method:'PATCH',
      body: JSON.stringify(obj)
    })
  }

  async function deleteClientById(id) {
    await fetch(`http://localhost:3000/api/clients/${id}`, {
      method:'DELETE'
    })

  }

  async function findClient(string) {
    const response = await fetch(`http://localhost:3000/api/clients?search=${string}`, {
      method: 'GET'
    })
    let data = await response.json()
    return data
  }


  async function createEditedTable(upd) {

    tbody.innerHTML = ''
    let data = await getData()
    if (upd) {
      data = upd
    }
    for(let obj of data) {
      createTableRow(obj)
    }
    clientAddBtn.classList.remove('hidden')

  }

  function createTable() {
    for(let obj of data) {
      createTableRow(obj)
    }
    
  }
  let time 
  headerInput.addEventListener('input', async () => {
    if (time) {
      clearTimeout(time)
    }
    time = setTimeout(test, 1000)
    async function test() {
      let value = headerInput.value
      let x = await findClient(value)
      createEditedTable(x)
    }
    })

  function createContact(type, value) {
    let element = document.createElement('div')
    let select = document.createElement('div')
    let selectHeader = document.createElement('div')
    let selectCurrent = document.createElement('div')
    let selectIcon = document.createElement('div')
    let selectBody = document.createElement('div')
    let telOption = document.createElement('div')
    let secondTelOption= document.createElement('div')
    let emailOption = document.createElement('div')
    let vkOption = document.createElement('div')
    let facebookOption = document.createElement('div')
    let socialData = document.createElement('input')
    let deleteBtn = document.createElement('div')
    deleteBtn.classList.add('contact_delete')
    deleteBtn.id = 'contact_delete'
    element.classList.add('social_block')
    socialData.placeholder = 'Введите данные контакта'
    socialData.classList.add('social_input')
    selectCurrent.innerHTML = 'Телефон'
    select.classList.add('select')
    selectHeader.classList.add('select__header')
    selectIcon.classList.add('select__icon')
    selectBody.classList.add('select__body')
    telOption.classList.add('select__item')
    emailOption.classList.add('select__item')
    vkOption.classList.add('select__item')
    facebookOption.classList.add('select__item')
    selectCurrent.classList.add('select__current')


    telOption.value = 'Телефон'
    secondTelOption.value = 'Доп. телефон'
    emailOption.value = 'Email'
    vkOption.value = 'Vk'
    facebookOption.value = 'Facebook'


    telOption.innerHTML = 'Телефон'
    secondTelOption.innerHTML = 'Доп. телефон'
    emailOption.innerHTML = 'Email'
    vkOption.innerHTML = 'Vk'
    facebookOption.innerHTML = 'Facebook'

    
    if (type, value) {
      socialData.value = value

      if (type === 'Vk') {
        vkOption.selected = true

      } else if (type === 'Email') {
        emailOption.selected = true

      } else if (type === 'Facebook') {
        facebookOption.selected = true
      }
      
    }

    selectHeader.appendChild(selectCurrent)
    selectHeader.appendChild(selectIcon)
    selectBody.appendChild(facebookOption)
    selectBody.appendChild(vkOption)
    selectBody.appendChild(emailOption)
    selectBody.appendChild(telOption)
    select.appendChild(selectHeader)
    select.appendChild(selectBody)
    element.appendChild(select)
    element.appendChild(socialData)
    element.appendChild(deleteBtn)
    addContactsSection.appendChild(element, addClientContactsButton)
    contactsSection.appendChild(element, contactsBtn)
    select.addEventListener('click', function(e) {
      let element = e.target
      if (element.classList.contains('select__header')) {

        selectBody.classList.toggle('is-active')
      }
      if (element.classList.contains('select__item')) {
        selectCurrent.innerText = element.value
        selectBody.classList.toggle('is-active')
      }
    })

  }

  function addcreateContact() {
    let element = document.createElement('div')
    let select = document.createElement('div')
    let selectHeader = document.createElement('div')
    let selectCurrent = document.createElement('div')
    let selectIcon = document.createElement('div')
    let selectBody = document.createElement('div')
    let telOption = document.createElement('div')
    let secondTelOption= document.createElement('div')
    let emailOption = document.createElement('div')
    let vkOption = document.createElement('div')
    let facebookOption = document.createElement('div')
    let socialData = document.createElement('input')
    let deleteBtn = document.createElement('div')
    deleteBtn.classList.add('contact_delete')
    deleteBtn.id = 'contact_delete'
    element.classList.add('social_block')
    socialData.placeholder = 'Введите данные контакта'
    socialData.classList.add('social_input')
    selectCurrent.innerHTML = 'Телефон'
    select.classList.add('select')
    selectHeader.classList.add('select__header')
    selectIcon.classList.add('select__icon')
    selectBody.classList.add('select__body')
    telOption.classList.add('select__item')
    emailOption.classList.add('select__item')
    vkOption.classList.add('select__item')
    facebookOption.classList.add('select__item')
    selectCurrent.classList.add('select__current')

    telOption.value = 'Телефон'
    secondTelOption.value = 'Доп. телефон'
    emailOption.value = 'Email'
    vkOption.value = 'Vk'
    facebookOption.value = 'Facebook'


    telOption.innerHTML = 'Телефон'
    secondTelOption.innerHTML = 'Доп. телефон'
    emailOption.innerHTML = 'Email'
    vkOption.innerHTML = 'Vk'
    facebookOption.innerHTML = 'Facebook'
    selectHeader.appendChild(selectCurrent)
    selectHeader.appendChild(selectIcon)
    selectBody.appendChild(facebookOption)
    selectBody.appendChild(vkOption)
    selectBody.appendChild(emailOption)
    selectBody.appendChild(telOption)
    select.appendChild(selectHeader)
    select.appendChild(selectBody)
    element.appendChild(select)
    element.appendChild(socialData)
    element.appendChild(deleteBtn)
    addContactsSection.appendChild(element, addClientContactsButton)

    select.addEventListener('click', function(e) {
      let element = e.target
      if (element.classList.contains('select__header')) {

        selectBody.classList.toggle('is-active')
      }
      if (element.classList.contains('select__item')) {
        selectCurrent.innerText = element.value
        selectBody.classList.toggle('is-active')
      }
    })




  }

 function formSubmit(evt) {

    evt.preventDefault()

    let clientData = {
      name: nameInput.value,
      surname: surNameInput.value,
      lastName: lastNameInput.value,
      contacts: []
    } 
    let keysMassive = []
    let valuesMassive = []
    let contactsMassive = document.querySelectorAll('.social_block')
    for (x of contactsMassive) {
      console.log(x)
      let firstValue = x.firstChild
      let z = firstValue.getElementsByTagName('*')
      let y = z.item(1)
   
      let key = y.innerText
      let value = x.children[1].value
      keysMassive.push(key)
      valuesMassive.push(value)
    }
    let idValue = changeCardId.textContent
    let id = idValue.slice(4)



    //////////
    for (let i = 0;i < keysMassive.length; i++) {

      let key = keysMassive[i]
      let value = valuesMassive[i] 
      let obj = {
        type: key,
        value: value
      }
      clientData.contacts.push(obj)
    }

    nameInput.value=''
    surNameInput.value=''
    lastNameInput.value=''
    console.log(clientData)

    addClient(clientData)
    userCard.classList.add('hidden')

    createEditedTable()
  }

  function saveChanges() {
    let keysMassive = []
    let valuesMassive = []
    let contactsMassive = document.querySelectorAll('.social_block')
    for (x of contactsMassive) {
      console.log(x)
      let firstValue = x.firstChild
      let z = firstValue.getElementsByTagName('*')
      let y = z.item(1)
   
      let key = y.innerText
      let value = x.children[1].value
      keysMassive.push(key)
      valuesMassive.push(value)
    }
    let idValue = changeCardId.textContent
    let id = idValue.slice(4)
    let contactData = {
      surname: surnameChangeIput.value,
      name: nameChangeInput.value,
      lastName: lastNameChangeInput.value,
      contacts : []
    }


    //////////
    for (let i = 0;i < keysMassive.length; i++) {

      let key = keysMassive[i]
      let value = valuesMassive[i] 
      let obj = {
        type: key,
        value: value
      }
      contactData.contacts.push(obj)
    }
    console.log(contactData)
    changeClient(id, contactData)
    createEditedTable()
    changeCard.classList.add('hidden')
    ///////
  }

  function sortByIdAscending() {
    let copy = data.slice(0)
    copy.sort(function(a,b){
      let c = Math.floor(a.id)
      let d = Math.floor(b.id)

      if( c < d ){
        return 1;
      }else if( c > d ){
        return -1;
      }
    })
    createEditedTable(copy)
  }

  function sortByIdDescending() {
    let copy = data.slice(0)
    copy.sort(function(a,b){
      let c = Math.floor(a.id)
      let d = Math.floor(b.id)

      if( c < d ){
        return -1;
      }else if( c > d ){
        return 1;
      }
    })
    console.log(copy)
    createEditedTable(copy)
  }

  function sortByFioAscending() {
    let copy = data.slice(0)
    copy.sort(function(a,b){
      let c = a.name + a.surname + a.lastName
      let d = b.name + b.surname + b.lastName

      if( c < d ){
        return 1;
      }else if( c > d ){
        return -1;
      }
    })
    console.log(copy)
    createEditedTable(copy)
  }

  function sortByFioDescending() {
    let copy = data.slice(0)
    copy.sort(function(a,b){
      let c = a.name + a.surname + a.lastName
      let d = b.name + b.surname + b.lastName

      if( c < d ){
        return -1;
      }else if( c > d ){
        return 1;
      }
    })
    console.log(copy)
    createEditedTable(copy)
  }

  function sortByCreateDateAscending() {
    let copy = data.slice(0)

    copy.sort(function(a,b) {
      let dateMassiveC = a.createdAt.split('T')
      let dateMassiveD = b.createdAt.split('T')
      let createDateC = dateMassiveC[0].split('.').join('-')
      let createTimeC = dateMassiveC[1].split('.').join('-').substring(0,5)
      let createDateD = dateMassiveD[0].split('.').join('-')
      let createTimeD = dateMassiveD[1].split('.').join('-').substring(0,5)
      massiveC = []
      massiveD = []
      let crTimeC = createTimeC.split(':').join('-')
      let crTimeD = createTimeD.split(':').join('-')
      massiveC.push(createDateC)
      massiveC.push(crTimeC)
      massiveD.push(createDateD)
      massiveD.push(crTimeD)
      let c = massiveC.join('-')
      let d = massiveD.join('-')
      if( c < d ){
        return 1;
      }else if( c > d ){
        return -1;
      }


    })
    createEditedTable(copy)
  }

  function sortByCreateDateDescending() {
    let copy = data.slice(0)

    copy.sort(function(a,b) {
      let dateMassiveC = a.createdAt.split('T')
      let dateMassiveD = b.createdAt.split('T')
      let createDateC = dateMassiveC[0].split('.').join('-')
      let createTimeC = dateMassiveC[1].split('.').join('-').substring(0,5)
      let createDateD = dateMassiveD[0].split('.').join('-')
      let createTimeD = dateMassiveD[1].split('.').join('-').substring(0,5)
      massiveC = []
      massiveD = []
      let crTimeC = createTimeC.split(':').join('-')
      let crTimeD = createTimeD.split(':').join('-')
      massiveC.push(createDateC)
      massiveC.push(crTimeC)
      massiveD.push(createDateD)
      massiveD.push(crTimeD)
      let c = massiveC.join('-')
      let d = massiveD.join('-')
      if( c < d ){
        return -1;
      }else if( c > d ){
        return 1;
      }


    })
    createEditedTable(copy)
  }

  function sortByChangeDateAscending() {
    let copy = data.slice(0)

    copy.sort(function(a,b) {
      let dateMassiveC = a.updatedAt.split('T')
      let dateMassiveD = b.updatedAt.split('T')
      let createDateC = dateMassiveC[0].split('.').join('-')
      let createTimeC = dateMassiveC[1].split('.').join('-').substring(0,5)
      let createDateD = dateMassiveD[0].split('.').join('-')
      let createTimeD = dateMassiveD[1].split('.').join('-').substring(0,5)
      massiveC = []
      massiveD = []
      let crTimeC = createTimeC.split(':').join('-')
      let crTimeD = createTimeD.split(':').join('-')
      massiveC.push(createDateC)
      massiveC.push(crTimeC)
      massiveD.push(createDateD)
      massiveD.push(crTimeD)
      let c = massiveC.join('-')
      let d = massiveD.join('-')
      if( c < d ){
        return 1;
      }else if( c > d ){
        return -1;
      }


    })
    createEditedTable(copy)
  }

  function sortByChangeDateDescending() {
    let copy = data.slice(0)

    copy.sort(function(a,b) {
      let dateMassiveC = a.updatedAt.split('T')
      let dateMassiveD = b.updatedAt.split('T')
      let createDateC = dateMassiveC[0].split('.').join('-')
      let createTimeC = dateMassiveC[1].split('.').join('-').substring(0,5)
      let createDateD = dateMassiveD[0].split('.').join('-')
      let createTimeD = dateMassiveD[1].split('.').join('-').substring(0,5)
      massiveC = []
      massiveD = []
      let crTimeC = createTimeC.split(':').join('-')
      let crTimeD = createTimeD.split(':').join('-')
      massiveC.push(createDateC)
      massiveC.push(crTimeC)
      massiveD.push(createDateD)
      massiveD.push(crTimeD)
      let c = massiveC.join('-')
      let d = massiveD.join('-')
      if( c < d ){
        return -1;
      }else if( c > d ){
        return 1;
      }


    })
    createEditedTable(copy)
  }

  async function createTableRow(obj) {
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    let td5 = document.createElement('td')
    let td6 = document.createElement('td')
    let changeBtn = document.createElement('button')
    let deleteBtn = document.createElement('button')
    let dateMassive = obj.createdAt.split('T')
    let editMassive = obj.updatedAt.split('T')
    let createDate = dateMassive[0].split('.').join('-')
    let createTime = dateMassive[1].split('.').join('-').substring(0,5)
    let editDate = editMassive[0].split('.').join('-')
    let editTime = editMassive[1].split('.').join('-').substring(0,5)
    let contactBubbles = []
    let changeImg = document.createElement('img')
    let deleteImg = document.createElement('img')
    changeImg.src = '../img/edit.jpg'
    deleteImg.src = '../img/cansel.jpg'
    td5.classList.add('flex')
    tr.id = 'client_table'
    changeBtn.classList.add('client_btn','change_btn')
    changeBtn.setAttribute('data-id', obj.id)

    changeBtn.innerText = 'Изменить'

    deleteBtn.classList.add('client_btn', 'delete_btn')
    deleteBtn.setAttribute('data-id', obj.id)
    deleteBtn.innerHTML = `Удалить`
    
    td1.innerHTML = obj.id;
    td2.innerHTML = `${obj.name}  ${obj.surname} ${obj.lastName} ` 
    td3.innerHTML = createDate +' '+ '<span style="color:#B0B0B0;"> ' + createTime + '</span>'; 
    td4.innerHTML = editDate +' '+ '<span style="color:#B0B0B0;"> ' + editTime + '</span>'
    for (let x of obj.contacts) { 
      
      let img = document.createElement('img')
      let link = document.createElement('a')
      if (x.type === 'Vk') {
        img.src = "../img/vk.svg"
        link.appendChild(img)
        link.setAttribute('data-bs-toggle', 'tooltip')
        link.setAttribute('data-bs-placement', 'top')
        link.title = `${x.type}: ${x.value}`
        contactBubbles.push(link)

      } else if (x.type === "Facebook") {
        img.src = "../img/fb.svg"
        link.appendChild(img)
        link.href = x.value
        link.setAttribute('data-bs-toggle', 'tooltip')
        link.setAttribute('data-bs-placement', 'top')
        link.title = `${x.type}: ${x.value}`
        contactBubbles.push(link)

      } else if (x.type === "Телефон") {
        img.src = "../img/phone.svg"
        link.appendChild(img)
        link.href = `tel:${x.value}`
        link.setAttribute('data-bs-toggle', 'tooltip')
        link.setAttribute('data-bs-placement', 'top')
        link.title = `${x.type}: ${x.value}`
        contactBubbles.push(link)

      } else if (x.type === "Email") {
        img.src = "../img/mail.svg"
        link.appendChild(img)
        link.href = x.value
        link.setAttribute('data-bs-toggle', 'tooltip')
        link.setAttribute('data-bs-placement', 'top')
        link.title = `${x.type}: ${x.value}`
        contactBubbles.push(link)

      } else {
        img.src = "../img/Subtract.svg"
        link.appendChild(img)
        link.href = x.value
        link.setAttribute('data-bs-toggle', 'tooltip')
        link.setAttribute('data-bs-placement', 'top')
        link.title = `${x.type}: ${x.value}`
        contactBubbles.push(link)

      }

    }
    
    if (contactBubbles) {
      for (x of contactBubbles) {
        x.classList.add('contact_bubble')
        td5.appendChild(x)
      }
    }
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    td6.appendChild(changeBtn)
    td6.appendChild(deleteBtn)
    tr.appendChild(td6)
    tbody.appendChild(tr)
    tr.addEventListener('click', async function(e) {

      let button = e.target
      let id = button.getAttribute('data-id')
      if(button.classList.contains("delete_btn")){
        deleteClientById(id)
        createEditedTable()
      } if (button.classList.contains("change_btn")){
        contactsBtn.classList.remove('padding_class')
        if (contactsSection.children.length > 1) {
          contactsSection.innerHTML = ''
        }

        let data = await getClientByID(id)
        changeCardId.innerHTML = `ID: ${data.id}`
        surnameChangeIput.value = data.surname
        nameChangeInput.value = data.name
        lastNameChangeInput.value = data.lastName
        
        if (data.contacts.length > 0) {
          contactsBtn.classList.add('padding_class')
          for (let x of data.contacts) {
            console.log(x.type)
            createContact(x.type, x.value)
          }
          changeCard.classList.remove('hidden')
        }
        
        changeCard.classList.remove('hidden')
        console.log(changeCard)

      }
    })
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  }


  userForm.addEventListener('submit', formSubmit)
  clientAddBtn.addEventListener('click', () => {
    
    if(addContactsSection.lenght > 0) {
      while(addContactsSection.firstChild) {
        addContactsSection.removeChild(addContactsSection.firstChild)
      }
    }

    userCard.classList.toggle('hidden')
  })
  closeBtn.addEventListener('click', () => {
    userCard.classList.toggle('hidden')
    addClientContactsButton.classList.remove('padding_class')
  })
  closeChangeCard.addEventListener('click', () => {
    while (contactsSection.firstChild) {
      contactsSection.removeChild(contactsSection.firstChild);
    }
    changeCard.classList.add('hidden')
  })
  changeSaveBtn.addEventListener('click', function(evt) {
    evt.preventDefault()
    saveChanges()
  })
  changeDeleteClient.addEventListener('click', function(evt){
    evt.preventDefault()
    let idValue = changeCardId.textContent
    let id = idValue.slice(4)
    deleteClientById(id)
    changeCard.classList.add('hidden')
    createEditedTable()
  })
  
  contactsBtn.addEventListener('click', function(evt) {
    evt.preventDefault()
    
    createContact()
    contactsBtn.classList.add('padding_class')
  })




  addClientContactsButton.addEventListener('click', function(evt) {
    evt.preventDefault()
    addcreateContact()
    addClientContactsButton.classList.add('padding_class')
  })
  addContactsSection.addEventListener('click', function(e) {
    let contact = e.target
    if (contact.id === 'contact_delete') {
      let parent = contact.parentNode
      parent.remove()
    }
  })
  contactsSection.addEventListener('click', function(e) {
    let contact = e.target
    if (contact.id ==='contact_delete') {
      let parent = contact.parentNode
      parent.remove()
    }
    console.log(contactsSection.childNodes)
    if (contactsSection.childNodes.length < 1) {
      contactsBtn.classList.remove('padding_class')
    }
  })


  thead.addEventListener('click', function(e) {
    let th = e.target
    let attr = th.getAttribute('data-sort')
    if (th.id === 'id') {
      let idArrow = document.getElementById('id_arrow')


      if (attr == 'ascending') {
        clientAddBtn.classList.add('hidden')
        sortByIdAscending()
        th.setAttribute('data-sort', 'descending')
        idArrow.classList.add('rotate')
      } else if(attr == 'descending'){
        clientAddBtn.classList.add('hidden')
        sortByIdDescending()
        th.setAttribute('data-sort', 'ascending')
        idArrow.classList.remove('rotate')
      }
    }
    if (th.id === 'fio') {
      let fioArrow = document.getElementById('fio_arrow')
      let sortType = document.getElementById('sort_type')
      if (attr == 'ascending') {
        clientAddBtn.classList.add('hidden')
        sortByFioAscending()

        th.setAttribute('data-sort', 'descending')
        fioArrow.classList.add('rotate')
        sortType.innerText = "Я-А"
      } else if(attr == 'descending'){
        clientAddBtn.classList.add('hidden')
        sortByFioDescending()
        th.setAttribute('data-sort', 'ascending')
        fioArrow.classList.remove('rotate')
        sortType.innerText = "А-Я"
      }
    }
    if (th.id === 'create_date') {
      let arrow = document.getElementById('create_date_arrow')
      if (attr == 'ascending') {
        clientAddBtn.classList.add('hidden')
        arrow.classList.remove('rotate')
        sortByCreateDateAscending()
        th.setAttribute('data-sort', 'descending')
      }
      if (attr == 'descending') {
        clientAddBtn.classList.add('hidden')
        sortByCreateDateDescending()
        th.setAttribute('data-sort', 'ascending')
        arrow.classList.add('rotate')
      }
    }
    if (th.id === 'change_date') {
      let arrow = document.getElementById('update_date_arrow')
      if (attr == 'ascending') {
        clientAddBtn.classList.add('hidden')
        arrow.classList.remove('rotate')
        sortByChangeDateAscending()
        th.setAttribute('data-sort', 'descending')
      }
      if (attr == 'descending') {
        clientAddBtn.classList.add('hidden')
        sortByChangeDateDescending()
        th.setAttribute('data-sort', 'ascending')
        arrow.classList.add('rotate')
      }
    }
  })

  cancel.addEventListener('click', function(evt) {
    evt.preventDefault()
    userCard.classList.add('hidden')
  })


})


//при первом взаимодействии с элементом он не работает
//иконки контактов готово!

//добавлеие контактов при добавлении клиента готово

  ///крестик на контакте готово
///вылидация форм по желанию
///кастомный селект
////внешка
////hover эффекты, окно подтверждения удаления, затемнение задника, 
/////адаптивность
//////попправки из видоса
///////все получится :)
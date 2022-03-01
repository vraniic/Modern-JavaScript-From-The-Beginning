let val

val = document

val = document.all
val = document.all[0]
val = document.all[2]
val = document.all.length

val = document.head
val = document.body

val = document.doctype
val = document.domain

val = document.characterSet
val = document.contentType


val = document.forms
val = document.forms[0]
val = document.forms[0].method
val = document.forms[0].action

val = document.forms[0].id


val = document.forms[0]


console.log(val);


const newHeading = document.createElement('h2')

newHeading.id = 'task-title'

newHeading.appendChild(document.createTextNode('task-list'))


localStorage.setItem
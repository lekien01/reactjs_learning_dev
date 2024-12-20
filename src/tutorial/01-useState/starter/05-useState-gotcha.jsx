import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const studentsList = [
  {
    id: uuidv4(),
    age: 30,
    name: 'John',
    email: 'john@gmail.com',
    wageMonthly: 100,
  },
  {
    id: uuidv4(),
    age: 31,
    name: 'Peter',
    email: 'peter@email',
    wageMonthly: 300,
  },
  {
    id: uuidv4(),
    age: 32,
    name: 'Kien',
    email: 'kien@email',
    wageMonthly: 100,
  },
  {
    id: uuidv4(),
    age: 30,
    name: 'Nam',
    email: 'nam@email',
    wageMonthly: 200,
  },
]

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const [student, setStudent] = useState(studentsList)
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState('')
  const [wageMonthly, setwageMontly] = useState(0)

  const addOne = () => {
    setValue(value + 1)
  }

  const addNewStudent = () => {
    const newStudentsList = []

    for (let i = 0; i < studentsList.length; i++) {
      newStudentsList.push(studentsList[i])
    }

    newStudentsList.push({
      id: uuidv4(),
      name,
      age,
      email,
      wageMonthly: wageMonthly,
    })

    setStudent(newStudentsList)
  }
  useEffect(() => {
    console.log('hello')
  }, [name, age, email, wageMonthly])

  return (
    <div>
      <div>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={addOne}>
          Add One
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="age"
          onChange={(e) => setAge(Number(e.target.value))}
        ></input>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="wageMonthly"
          onChange={(e) => setwageMontly(e.target.value)}
        ></input>
      </div>

      <div>
        {student.map((student) => {
          const { id, name, age, wageMonthly, email } = student
          return (
            <ul key={id}>
              <h4>
                {name}, {age}, {wageMonthly}, {email}
              </h4>
              <button className="btn" type="button">
                Edit
              </button>
              <button className="btn" type="button">
                Remove
              </button>
            </ul>
          )
        })}
      </div>
      <button type="button" className="btn" onClick={addNewStudent}>
        Add Person
      </button>
      <button type="button" className="btn" onClick={addNewStudent}>
        Clear All
      </button>
    </div>
  )
}

export default UseStateGotcha

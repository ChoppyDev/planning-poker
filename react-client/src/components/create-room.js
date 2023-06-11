

export default function CreateRoom() {
  return(
    <div>
      <h1> Create a room</h1>

      <div className="column">
        <input type="text" placeholder="Room name"/>
        <select>
          <option>Fibonacci 0,1,2,3,5,8, etc..</option>
          <option>Fibonacci modified</option>
        </select>
        <a className="btn-main-cta" href="/">Create a room</a>
      </div>
    </div>
  )
}
import useMessage from "../stores/useMessage";

export default function Test() {
  const [message, setMessage] = useMessage()
  return (
    <div className="border mt-4 p-4 inline-block">
      <p>{message}</p>
      <button onClick={() => setMessage('Hello again!')}>Update Message</button>
    </div>

  )
}

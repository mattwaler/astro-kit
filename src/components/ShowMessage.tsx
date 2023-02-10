import message from "../stores/message";

export default function Test() {
  return (
    <div className="pt-8">
      <p>The message is: {message.value}</p>
    </div>
  );
}

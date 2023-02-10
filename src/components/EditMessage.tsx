import message from "../stores/message";

export default function Test() {
  return (
    <div>
        Edit Message:
        <input
          className="bg-slate-200 rounded w-full border px-4 py-2"
          type="text"
          value={message.value}
          onInput={(e) => {
            message.value = e.target.value
          }}
        />
    </div>
  );
}

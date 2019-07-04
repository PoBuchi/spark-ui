const QuestionLabel = ({ id, title, required }) => (
  <label
    className="display:block size:18 font:roboto text:bold padding-b:7 padding-t:25"
    htmlFor={id}
    style={{
      wordBreak: 'break-all',
    }}
  >
    {title}
    {required && (
      <span className="text-color:critical">*</span>
    )}
  </label>
)
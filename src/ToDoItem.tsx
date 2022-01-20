type TodoItem = {
  number?: number,
  text?: string,
  remove: (index: number) => void
}

export default (props: TodoItem): JSX.Element => {
  return (
    <div className="item">
      <div className="content">
        <span>{props.number ?? -1}</span> - <span>{props.text}</span>
      </div>

      <div className="actions">
        <button onClick={() => props.remove((props.number ?? -1) - 1)} title="Remover tarefa">
          <i className="gg-trash"></i>
        </button>
      </div>
    </div>
  )
}
import type { EditTaskById, UpdateTaskInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormTask = NonNullable<EditTaskById['task']>

interface TaskFormProps {
  task?: EditTaskById['task']
  onSave: (data: UpdateTaskInput, id?: FormTask['id']) => void
  error: RWGqlError
  loading: boolean
}

const TaskForm = (props: TaskFormProps) => {
  const onSubmit = (data: FormTask) => {
    props.onSave(data, props?.task?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTask> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.task?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="task-status-0"
            name="status"
            defaultValue="TODO"
            defaultChecked={props.task?.status?.includes('TODO')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Todo</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="task-status-1"
            name="status"
            defaultValue="IN_PROGRESS"
            defaultChecked={props.task?.status?.includes('IN_PROGRESS')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>In Progress</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="task-status-2"
            name="status"
            defaultValue="DONE"
            defaultChecked={props.task?.status?.includes('DONE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Done</div>
        </div>

        <FieldError name="status" className="rw-field-error" />

        <Label
          name="percent"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Percent
        </Label>

        <NumberField
          name="percent"
          defaultValue={props.task?.percent}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="percent" className="rw-field-error" />

        <Label
          name="projectId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Project id
        </Label>

        <NumberField
          name="projectId"
          defaultValue={props.task?.projectId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="projectId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.task?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="startDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start date
        </Label>

        <DatetimeLocalField
          name="startDate"
          defaultValue={formatDatetime(props.task?.startDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startDate" className="rw-field-error" />

        <Label
          name="endDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End date
        </Label>

        <DatetimeLocalField
          name="endDate"
          defaultValue={formatDatetime(props.task?.endDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="endDate" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TaskForm

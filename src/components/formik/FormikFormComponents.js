import { Field, ErrorMessage } from 'formik'
import { Checkbox } from 'primereact/checkbox'
import { RadioButton } from 'primereact/radiobutton'
import { InputText } from 'primereact/inputtext'
import { InputNumber } from 'primereact/inputnumber'
import { Dropdown } from 'primereact/dropdown'

function toPascalCaseWithSpacing(text) {
    return text.replaceAll('_', ' ')
        .replaceAll('-', ' ')
        .replaceAll(
            /\w+/g, 
            function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase()}
        )
}

/**
 * Componente que devuelve un input según el tipo, por defecto devuelve un input de tipo texto
 * el componente es una combinación entre un field de formik y primereact
 */
function InputFormik({ 
    name, 
    label, 
    type='text', 
    classNameInput='',
    minFractionDigits,
    maxFractionDigits,
    locale,
    onlyInput
}) {
    const props = {}
    if(classNameInput) props.className = classNameInput
    let input = <Field name={name}>
        {({ field }) => (
            <InputText type={type} {...field} {...props} />
        )}
    </Field>
    if(type === 'number') {
        if(minFractionDigits) props.minFractionDigits = minFractionDigits
        if(maxFractionDigits) props.maxFractionDigits = maxFractionDigits
        if(locale) props.locale = locale
        input = <Field name={name}>
            {({ field: { name, value, onBlur }, form: { values, setValues } }) => (
                <InputNumber 
                    name={name} 
                    value={value}
                    mode='decimal' 
                    onChange={(e)=>setValues({...values, [name]: e.value})} 
                    onBlur={onBlur}
                    useGrouping={false} 
                    {...props}
                />
            )}
        </Field>
    }

    return onlyInput ? (
        <>{input}</>
    ) : (
        <div className='mb-3 w-100 p-fluid'>
            <label className='mb-2 d-block'>{label ? label : toPascalCaseWithSpacing(name)}</label>
            {input}
            <ErrorMessage name={name}>{msg => <div className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
        </div>
    )
}

/**
 * Devuelve un componente textarea, el componente es un field de formik con estilos de primereact
 */
function TextAreaFormik({label, name, type='text'}) {
    return (
        <div className='mb-3 w-100'>
            <label className='mb-2 d-block'>{label ? label : toPascalCaseWithSpacing(name)}</label>
            <Field 
                as='textarea'
                type={type} 
                className='p-inputtextarea p-inputtext w-100'
                name={name}
                rows='5'
                style={{resize: 'none'}}
            />
            <ErrorMessage name={name}>{msg => <div className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
        </div>
    )
}

/**
 * Devuelve un componente checkbox, el componente es una combinación entre un field de formik
 * y un checkbox de primereact
 */
function CheckboxFormik({label, name}) {
    return (
        <div className='mb-3 w-100 d-flex align-items-center'>
            <label className='d-flex align-items-center cursor-pointer'>
                <Field name={name}>
                    {({ field: { name, value, onBlur, onChange } }) => (
                        <Checkbox 
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        checked={value}
                        />
                    )}
                </Field>
                <span className='ms-2'>{label ? label : toPascalCaseWithSpacing(name)}</span>
            </label>
            <ErrorMessage name={name}>{msg => <div className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
        </div>
    )
}

/**
 * Devuelve un componente radioButton, el componente es una combinación entre un field de formik
 * y un radioButton de primereact
 */
function RadioButtonFormik({label, name, data}) {
    return (
        <div className='mb-3 w-100'>
            <label className='d-flex align-items-center cursor-pointer'>
                <Field name={name}>
                    {({ field: { name, value, onBlur, onChange } }) => (
                        <RadioButton 
                            name={name}
                            value={data}
                            onChange={onChange}
                            onBlur={onBlur}
                            checked={data === value} 
                        />
                    )}
                </Field>
                <span className='ms-2'>{label ? label : toPascalCaseWithSpacing(name)}</span>
            </label>
        </div>
    )
}

/**
 * Devuelve un componente select, el componente es una combinación entre un field de formik
 * y un dropdown de primereact
 */
function SelectFormik({ 
    name, 
    label, 
    options, 
    optionLabel,
    optionValue,
    placeholder, 
    classNameSelect,
    filterBy=null,
    itemTemplate,
    valueTemplate,
    onlySelect,
}) {
    const props = {}
    if (placeholder) props.placeholder = placeholder
    if (optionLabel) props.optionLabel = optionLabel
    if (optionValue) props.optionValue = optionValue
    if (itemTemplate) props.itemTemplate = itemTemplate
    if (valueTemplate) props.valueTemplate = valueTemplate
    if (classNameSelect) props.className = classNameSelect

    let dropdown = <Field name={name}>
        {({ field }) => (
            <Dropdown
                options={options}
                {...field}
                {...props}
            />
        )}
    </Field>
    if(filterBy) {
        dropdown = <Field name={name}>
            {({ field }) => (
                <Dropdown
                    options={options}
                    filter 
                    showClear 
                    filterBy={filterBy}
                    {...field}
                    {...props}
                />
            )}
        </Field>
    }
    return onlySelect ? (
        <>{dropdown}</>
    ) : (
        <div className='mb-3 w-100'>
            <label className='mb-2 d-block'>{label ? label : toPascalCaseWithSpacing(name)}</label>
            {dropdown}
            <ErrorMessage name={name}>{msg => <div className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
        </div>
    )
}

export {
    TextAreaFormik,
    InputFormik,
    CheckboxFormik,
    RadioButtonFormik,
    SelectFormik,
}


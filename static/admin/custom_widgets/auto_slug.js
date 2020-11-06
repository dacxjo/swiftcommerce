/* eslint-disable no-undef */
const SlugControl = createClass({
  getInitialState () {
    return {
      slug: ''
    }
  },
  normalize (str) {
    const from = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç'
    const to = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc'
    const mapping = {}

    for (let i = 0, j = from.length; i < j; i++) { mapping[from.charAt(i)] = to.charAt(i) }

    const ret = []
    for (let i = 0, j = str.length; i < j; i++) {
      const c = str.charAt(i)
      // eslint-disable-next-line no-prototype-builtins
      if (mapping.hasOwnProperty(str.charAt(i))) { ret.push(mapping[c]) } else { ret.push(c) }
    }
    return ret.join('').replace(/[^-A-Za-z0-9]+/g, '-').toLowerCase()
  },
  componentDidMount () {
    const nameInput = document.querySelector('input[id^="name-field-"]')

    if (nameInput) {
      if (nameInput.value) {
        this.setState((state) => {
          return {
            str: this.normalize(nameInput.value)
          }
        })

        if (!this.props.value) {
          this.props.onChange(this.state.str)
        }
      }

      nameInput.addEventListener('keyup', (event) => {
        this.props.onChange(this.normalize(event.target.value))
      })
    }
  },

  handleChange (e) {
    this.props.onChange(e.target.value)
  },

  render () {
    const value = this.props.value
    return h('input', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: 'text',
      onChange: this.handleChange,
      value: value || this.state.str
    })
  }
})

const SlugPreview = createClass({
  render () {
    return h('input', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: 'text',
      readOnly: true,
      value: this.state.str
    })
  }
})

CMS.registerWidget('slug', SlugControl, SlugPreview)

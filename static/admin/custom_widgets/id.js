/* eslint-disable no-undef */
const IdControl = createClass({
  getInitialState () {
    return {
      str: '',
      uniq: ''
    }
  },
  componentDidMount () {
    function uniq () {
      return Math.random().toString(36).substr(2, 9)
    };

    this.setState((state) => {
      return {
        uniq: uniq()
      }
    })

    const nameInput = document.querySelector('input[id^="name-field-"]')

    if (nameInput) {
      if (nameInput.value) {
        this.setState((state) => {
          return {
            str: nameInput.value.substring(0, 3).toUpperCase() + '-' + state.uniq
          }
        })

        if (!this.props.value) {
          this.props.onChange(this.state.str)
        }
      }

      nameInput.addEventListener('keydown', (event) => {
        this.props.onChange(event.target.value.substring(0, 3).toUpperCase().trim() + '-' + this.state.uniq)
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
      readOnly: true,
      onChange: this.handleChange,
      value: value || this.state.str
    })
  }
})

const IdPreview = createClass({
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

CMS.registerWidget('id', IdControl, IdPreview)

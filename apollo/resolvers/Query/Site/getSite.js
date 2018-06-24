import Sites from '../../../../collections/Sites'

export default (parent, { id }) => Sites.findOne({ _id: id })

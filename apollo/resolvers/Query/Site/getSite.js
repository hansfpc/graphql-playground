import Sites from '../../../../collections/Sites'

export default (root, { id }) => Sites.findOne({ _id: id })

import Sites from '../../../../collections/Sites'

export default (context, { id }) => Sites.findOne({ _id: id })

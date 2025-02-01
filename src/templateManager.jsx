import Template1 from "./Templates/Template1"
import Template2 from "./Templates/Template2"

export const templates = {
  1: Template1,
  2: Template2
}

export default function getTemplate(templateID, props) {
  const TemplateComponent = templates[templateID];

  if (TemplateComponent) {
    return (
      <TemplateComponent {... props} />
    )
  } else return null
}
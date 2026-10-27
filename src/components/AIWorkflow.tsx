import { Fragment } from 'react'
import type { ResumeData } from '../data/resume'
import { Section } from './Section'
import { FlowArrowIcon, TopicIcon } from './Icons'

export function AIWorkflow({ workflow }: { workflow: ResumeData['aiWorkflow'] }) {
  const { flow, background } = workflow
  return (
    <Section id="ai" title="My AI Workflow">
      <p className="ai__summary">{workflow.summary}</p>

      <figure className="flow" aria-label={flow.map((stage) => stage.who).join(', then ')}>
        <div className="flow__stages" role="list">
          {flow.map((stage, i) => (
            <Fragment key={stage.who}>
              {i > 0 && (
                <span className="flow__arrow" aria-hidden="true">
                  <FlowArrowIcon />
                </span>
              )}
              <div className={`flow__stage${stage.mine ? ' flow__stage--mine' : ''}`} role="listitem">
                <p className="flow__who">{stage.who}</p>
                <ul className="flow__steps">
                  {stage.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="flow__bg">
          <span className="flow__bg-who">
            <TopicIcon name="automate" />
            {background.who}
          </span>
          <ul className="flow__bg-steps">
            {background.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
      </figure>

      <ul className="practices">
        {workflow.practices.map((p) => (
          <li key={p.label} className="practice">
            <div className="practice__head">
              <span className="icon-tile">
                <TopicIcon name={p.icon} />
              </span>
              <div>
                <h3 className="practice__label">{p.label}</h3>
                <p className="practice__where">
                  {p.href ? (
                    <a className="nowrap" href={p.href}>
                      {p.context}
                    </a>
                  ) : (
                    p.context
                  )}
                </p>
              </div>
            </div>
            <p className="practice__detail">{p.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  MessageSquareText,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { toast } from "sonner";
import Seo, { SITE_URL } from "@/components/Seo";
import {
  AdUnit,
  Breadcrumbs,
  ContactMini,
  PageShell,
  SourceList,
} from "@/components/SiteChrome";
import {
  candidateProfileHref,
  getLocalCandidateProfile,
  type Language,
} from "@/data/localCandidateProfiles";
import { officialCandidateSourceUrl } from "@/data/localRaces";
import { submitDirectForm } from "@/lib/directForms";

const copy = {
  en: {
    profile: "Local candidate profile",
    officialRecord: "Official filing record",
    legalName: "Full legal name",
    ballotName: "Name on ballot",
    treasurer: "Campaign treasurer",
    treasurerFiling: "Open treasurer filing",
    application: "Open ballot application",
    source: "Open City candidate table",
    campaignSite: "Candidate campaign site",
    verified: "What is verified",
    candidateVoice: "In the candidate’s own words",
    candidateStatementPublished: "Candidate statement published",
    questionnairePublished: "Authorized questionnaire published",
    submittedByCampaign: "Submitted directly by the candidate",
    received: "Received",
    candidateStatementNote:
      "This statement is published as submitted and attributed to the candidate. Biographical and campaign claims in this section are candidate-provided unless they also appear in the independently sourced record above.",
    translationNote:
      "The Spanish edition is a faithful editorial translation of the English statement supplied by the candidate.",
    questionnaire: "Candidate questionnaire",
    questionnaireTitle: "Core questions plus record-specific follow-ups.",
    questionnaireIntro:
      "Laredo Politics asks every candidate the same core questions, one office-specific question, and follow-ups tied to verified public records. Responses are reviewed, attributed, and linked to supporting documents before publication.",
    publishedAnswer: "Candidate response",
    responseAttribution: "Respondent",
    certified: "Identity and publication authorization certified",
    responseTranslationNote:
      "Spanish answers are faithful editorial translations of the candidate’s submitted English responses.",
    status: "Response status",
    noResponse: "No verified response received",
    invitation:
      "Candidates or authorized campaign representatives can submit answers below.",
    respondent: "Respondent name",
    role: "Campaign role or title",
    email: "Campaign email",
    phone: "Phone (optional)",
    sources: "Supporting source links (optional)",
    attestation:
      "I certify that I am the candidate or an authorized campaign representative and that these answers may be published with attribution after verification.",
    submit: "Submit answers for review",
    sending: "Sending questionnaire…",
    success: "Questionnaire received",
    successText:
      "The answers were delivered for verification. They will not publish automatically.",
    error: "Questionnaire not sent",
    errorText: "Please try again or use the correction form.",
    editorial: "Verification before publication",
    editorialText:
      "Submission does not guarantee publication. We verify identity, preserve the candidate's meaning, request clarification when needed, and mark the publication or update date.",
    sourcesTitle: "Official sources",
  },
  es: {
    profile: "Perfil de candidatura local",
    officialRecord: "Registro oficial",
    legalName: "Nombre legal completo",
    ballotName: "Nombre en la boleta",
    treasurer: "Tesorero de campaña",
    treasurerFiling: "Abrir registro del tesorero",
    application: "Abrir solicitud para la boleta",
    source: "Abrir tabla municipal de candidatos",
    campaignSite: "Sitio oficial de campaña",
    verified: "Lo que está verificado",
    candidateVoice: "En palabras de la candidata",
    candidateStatementPublished: "Declaración de la candidata publicada",
    questionnairePublished: "Cuestionario autorizado publicado",
    submittedByCampaign: "Enviada directamente por la candidata",
    received: "Recibida",
    candidateStatementNote:
      "Esta declaración se publica con atribución a la candidata. Los datos biográficos y afirmaciones de campaña de esta sección fueron proporcionados por la candidata, salvo cuando también aparecen en el registro independiente de arriba.",
    translationNote:
      "La edición en español es una traducción editorial fiel de la declaración en inglés proporcionada por la candidata.",
    questionnaire: "Cuestionario para candidatos",
    questionnaireTitle:
      "Preguntas centrales y seguimientos basados en el registro.",
    questionnaireIntro:
      "Laredo Politics hace las mismas preguntas centrales a cada candidato, una pregunta específica del cargo y seguimientos vinculados a registros públicos verificados. Las respuestas se revisan, atribuyen y vinculan a documentos antes de publicarse.",
    publishedAnswer: "Respuesta de la candidata",
    responseAttribution: "Respondió",
    certified: "Identidad y autorización de publicación certificadas",
    responseTranslationNote:
      "Las respuestas en español son traducciones editoriales fieles de las respuestas en inglés enviadas por la candidata.",
    status: "Estado de la respuesta",
    noResponse: "No se ha recibido una respuesta verificada",
    invitation:
      "El candidato o un representante autorizado puede enviar respuestas abajo.",
    respondent: "Nombre de quien responde",
    role: "Cargo o función en la campaña",
    email: "Email de campaña",
    phone: "Teléfono (opcional)",
    sources: "Enlaces de respaldo (opcional)",
    attestation:
      "Certifico que soy el candidato o un representante autorizado y que estas respuestas pueden publicarse con atribución después de verificarse.",
    submit: "Enviar respuestas para revisión",
    sending: "Enviando cuestionario…",
    success: "Cuestionario recibido",
    successText:
      "Las respuestas fueron entregadas para verificación. No se publicarán automáticamente.",
    error: "No se envió el cuestionario",
    errorText: "Intenta nuevamente o usa el formulario de correcciones.",
    editorial: "Verificación antes de publicar",
    editorialText:
      "El envío no garantiza publicación. Verificamos identidad, preservamos el sentido de la respuesta, pedimos aclaraciones y marcamos la fecha de publicación o actualización.",
    sourcesTitle: "Fuentes oficiales",
  },
} as const;

export default function LocalCandidateProfilePage({
  slug,
  language = "en",
}: {
  slug: string;
  language?: Language;
}) {
  const candidate = getLocalCandidateProfile(slug);
  const [sending, setSending] = useState(false);
  const t = copy[language];
  if (!candidate) return null;
  const profile = candidate;

  const path = candidateProfileHref(candidate.slug, language);
  const alternatePath = candidateProfileHref(
    candidate.slug,
    language === "en" ? "es" : "en"
  );
  const initials = candidate.fullName
    .split(" ")
    .slice(0, 2)
    .map(part => part[0])
    .join("");

  async function submitQuestionnaire(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {
      subject: `Candidate questionnaire — ${profile.ballotName} — ${profile.office.en}`,
      candidate: profile.fullName,
      ballot_name: profile.ballotName,
      office: profile.office.en,
      respondent_name: String(data.get("respondent_name") || ""),
      campaign_role: String(data.get("campaign_role") || ""),
      campaign_email: String(data.get("campaign_email") || ""),
      campaign_phone: String(data.get("campaign_phone") || ""),
      supporting_links: String(data.get("supporting_links") || ""),
      authorization_certified: data.get("authorized") === "yes" ? "Yes" : "No",
    };
    for (const question of profile.questions)
      payload[`answer_${question.id}`] = String(
        data.get(`answer_${question.id}`) || ""
      );

    setSending(true);
    try {
      await submitDirectForm("candidate_questionnaire", payload);
      form.reset();
      toast.success(t.success, { description: t.successText });
    } catch {
      toast.error(t.error, { description: t.errorText });
    } finally {
      setSending(false);
    }
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: candidate.fullName,
    alternateName: candidate.ballotName,
    description: candidate.summary[language],
    url: `${SITE_URL}${path}`,
    ...(candidate.portraitUrl
      ? { image: `${SITE_URL}${candidate.portraitUrl}` }
      : {}),
  };

  return (
    <PageShell language={language}>
      <Seo
        language={language}
        alternatePath={alternatePath}
        title={`${candidate.ballotName}: ${candidate.office[language]} candidate profile and questionnaire`}
        description={candidate.summary[language]}
        path={path}
        type="article"
        image={candidate.portraitUrl}
        keywords={[
          candidate.ballotName,
          candidate.fullName,
          `${candidate.office.en} candidates 2026`,
          "Laredo candidate questionnaire",
        ]}
        schema={schema}
      />

      <section className="relative overflow-hidden bg-[#102b36] py-16 text-white sm:py-24">
        <div className="grain absolute inset-0 opacity-20" />
        <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full border-[70px] border-[#f0dfbd]/[0.05]" />
        <div className="container relative grid gap-8 lg:grid-cols-[1fr_220px] lg:items-end">
          <div>
            <p className="section-kicker section-kicker-light">{t.profile}</p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.2rem,7vw,6.8rem)] font-black leading-[0.88] tracking-[-0.065em]">
              {candidate.ballotName}
            </h1>
            <p className="mt-7 max-w-3xl border-l-2 border-[#e75037] pl-5 text-base leading-7 text-[#cad7d4] sm:text-lg">
              {candidate.summary[language]}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[8px] font-black uppercase tracking-[0.13em]">
              <span className="bg-[#f0dfbd] px-3 py-2 text-[#102b36]">
                {candidate.office[language]}
              </span>
              <span className="border border-white/20 px-3 py-2">
                {candidate.questionnaireResponse
                  ? t.questionnairePublished
                  : candidate.candidateSubmission
                    ? t.candidateStatementPublished
                    : t.noResponse}
              </span>
            </div>
          </div>
          <figure>
            <div className="grid aspect-[4/3] place-items-center overflow-hidden border border-white/15 bg-white/[0.04] font-display text-7xl font-black text-[#f0dfbd]">
              {candidate.portraitUrl ? (
                <img
                  src={candidate.portraitUrl}
                  alt={`${candidate.ballotName}, ${candidate.office.en} candidate`}
                  className="h-full w-full object-cover"
                />
              ) : (
                initials
              )}
            </div>
            {candidate.portraitCredit && (
              <figcaption className="mt-2 text-[8px] font-bold uppercase tracking-[0.1em] text-white/55">
                Photo: {candidate.portraitCredit}
              </figcaption>
            )}
          </figure>
        </div>
      </section>

      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs
            language={language}
            items={[
              {
                label: language === "en" ? "Election 2026" : "Elecciones 2026",
                href:
                  language === "en" ? "/election-2026" : "/es/elecciones-2026",
              },
              {
                label: candidate.office[language],
                href:
                  language === "en"
                    ? `/election-2026/${candidate.raceSlug}`
                    : `/es/elecciones-2026/${candidate.raceSlug}`,
              },
              { label: candidate.ballotName },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_330px] lg:gap-16">
            <article className="space-y-16">
              <section>
                <p className="section-kicker">{t.officialRecord}</p>
                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  <div className="border border-[#102b36]/14 bg-[#fbf8f1] p-6">
                    <p className="text-[8px] font-black uppercase tracking-[0.13em] text-[#718083]">
                      {t.legalName}
                    </p>
                    <p className="mt-3 font-display text-2xl font-black">
                      {candidate.fullName}
                    </p>
                  </div>
                  <div className="border border-[#102b36]/14 bg-[#fbf8f1] p-6">
                    <p className="text-[8px] font-black uppercase tracking-[0.13em] text-[#718083]">
                      {t.ballotName}
                    </p>
                    <p className="mt-3 font-display text-2xl font-black">
                      {candidate.ballotName}
                    </p>
                  </div>
                  <div className="border border-[#102b36]/14 bg-[#fbf8f1] p-6">
                    <p className="text-[8px] font-black uppercase tracking-[0.13em] text-[#718083]">
                      {t.treasurer}
                    </p>
                    <p className="mt-3 font-display text-2xl font-black">
                      {candidate.campaignTreasurer}
                    </p>
                  </div>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <a
                    href={candidate.treasurerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 items-center justify-between bg-[#102b36] px-5 text-[8px] font-black uppercase tracking-[0.11em] text-white"
                  >
                    {t.treasurerFiling}
                    <UserRoundCheck className="h-4 w-4 text-[#f0dfbd]" />
                  </a>
                  <a
                    href={candidate.applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 items-center justify-between border border-[#102b36]/20 bg-white px-5 text-[8px] font-black uppercase tracking-[0.11em]"
                  >
                    {t.application}
                    <FileText className="h-4 w-4 text-[#e75037]" />
                  </a>
                  <a
                    href={officialCandidateSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 items-center justify-between bg-[#e75037] px-5 text-[8px] font-black uppercase tracking-[0.11em] text-white"
                  >
                    {t.source}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  {candidate.candidateWebsite && (
                    <a
                      href={candidate.candidateWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-12 items-center justify-between border border-[#102b36]/20 bg-[#f0dfbd] px-5 text-[8px] font-black uppercase tracking-[0.11em]"
                    >
                      {t.campaignSite}
                      <ArrowUpRight className="h-4 w-4 text-[#e75037]" />
                    </a>
                  )}
                </div>
              </section>

              <section>
                <p className="section-kicker">{t.verified}</p>
                <div className="mt-7 grid gap-4">
                  {candidate.verifiedFacts.map(fact => (
                    <a
                      key={fact.text.en}
                      href={fact.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-4 border border-[#102b36]/14 bg-[#fbf8f1] p-5"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#28724a]" />
                      <div>
                        <p className="text-sm leading-6 text-[#425659]">
                          {fact.text[language]}
                        </p>
                        <span className="mt-2 inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.11em] text-[#e75037]">
                          {fact.sourceTitle}
                          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {candidate.candidateSubmission && (
                <section
                  id="candidate-statement"
                  className="overflow-hidden border border-[#102b36]/16 bg-[#fbf8f1]"
                >
                  <div className="grid gap-6 bg-[#102b36] p-6 text-white sm:grid-cols-[1fr_auto] sm:items-end sm:p-9">
                    <div>
                      <p className="section-kicker section-kicker-light">
                        {t.candidateVoice}
                      </p>
                      <h2 className="mt-5 font-display text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl">
                        {candidate.candidateSubmission.title[language]}
                      </h2>
                    </div>
                    <div className="border-l-2 border-[#e75037] pl-4 text-[9px] font-black uppercase leading-5 tracking-[0.12em] text-[#cad7d4]">
                      <p>{t.submittedByCampaign}</p>
                      <p>
                        {t.received}:{" "}
                        {candidate.candidateSubmission.receivedAt[language]}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 sm:p-9">
                    <div className="border-l-2 border-[#e75037] bg-[#f0dfbd]/45 px-5 py-4 text-sm leading-6 text-[#425659]">
                      <p>{t.candidateStatementNote}</p>
                      {language === "es" && (
                        <p className="mt-2 font-semibold">
                          {t.translationNote}
                        </p>
                      )}
                    </div>
                    <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#32484b] sm:text-base">
                      {candidate.candidateSubmission.paragraphs[language].map(
                        (paragraph, index) => (
                          <p key={`${candidate.slug}-statement-${index}`}>
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </section>
              )}

              <section id="questionnaire">
                <p className="section-kicker">{t.questionnaire}</p>
                <h2 className="mt-5 max-w-3xl font-display text-5xl font-black leading-[0.92] tracking-[-0.05em]">
                  {t.questionnaireTitle}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-[#526568]">
                  {t.questionnaireIntro}
                </p>
                {candidate.questionnaireResponse && (
                  <div className="mt-7 grid gap-3 border border-[#28724a]/25 bg-[#edf5ef] p-5 text-sm leading-6 text-[#32484b] sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <p className="font-black text-[#28724a]">
                        {t.responseAttribution}:{" "}
                        {candidate.questionnaireResponse.respondentName}
                      </p>
                      <p>
                        {candidate.questionnaireResponse.campaignRole[language]}
                      </p>
                      {language === "es" && (
                        <p className="mt-2 text-xs text-[#526568]">
                          {t.responseTranslationNote}
                        </p>
                      )}
                    </div>
                    <div className="text-[8px] font-black uppercase leading-5 tracking-[0.11em] text-[#28724a] sm:text-right">
                      <p>
                        {t.received}:{" "}
                        {candidate.questionnaireResponse.receivedAt[language]}
                      </p>
                      {candidate.questionnaireResponse
                        .authorizationCertified && <p>{t.certified}</p>}
                    </div>
                  </div>
                )}
                <div className="mt-8 border-t border-[#102b36]/18">
                  {candidate.questions.map((question, index) => {
                    const answer =
                      candidate.questionnaireResponse?.answers[question.id]?.[
                        language
                      ];
                    return (
                      <div
                        key={question.id}
                        className="grid gap-4 border-b border-[#102b36]/18 py-6 sm:grid-cols-[55px_1fr]"
                      >
                        <span className="font-display text-3xl font-black text-[#e75037]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-display text-2xl font-black tracking-[-0.03em]">
                            {question.question[language]}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-[#627477]">
                            {question.guidance[language]}
                          </p>
                          {answer && (
                            <div className="mt-5 border-l-2 border-[#28724a] bg-[#edf5ef] p-5">
                              <p className="text-[8px] font-black uppercase tracking-[0.12em] text-[#28724a]">
                                {t.publishedAnswer}
                              </p>
                              <p className="mt-3 whitespace-pre-line text-[15px] leading-7 text-[#32484b]">
                                {answer}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="bg-[#102b36] p-6 text-white sm:p-9">
                <div className="flex items-center gap-3">
                  <MessageSquareText className="h-6 w-6 text-[#e75037]" />
                  <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#f0dfbd]">
                    {t.invitation}
                  </p>
                </div>
                <form
                  onSubmit={submitQuestionnaire}
                  className="mt-7 grid gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      name="respondent_name"
                      required
                      placeholder={t.respondent}
                      className="min-h-12 border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]"
                    />
                    <input
                      name="campaign_role"
                      required
                      placeholder={t.role}
                      className="min-h-12 border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]"
                    />
                    <input
                      name="campaign_email"
                      type="email"
                      required
                      placeholder={t.email}
                      className="min-h-12 border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]"
                    />
                    <input
                      name="campaign_phone"
                      type="tel"
                      placeholder={t.phone}
                      className="min-h-12 border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]"
                    />
                  </div>
                  {candidate.questions.map((question, index) => (
                    <label key={question.id} className="grid gap-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.12em] text-[#f0dfbd]">
                        {String(index + 1).padStart(2, "0")} ·{" "}
                        {question.question[language]}
                      </span>
                      <textarea
                        name={`answer_${question.id}`}
                        required
                        rows={5}
                        className="resize-y border border-white/15 bg-white/10 p-4 text-sm leading-6 text-white outline-none focus:border-[#f0dfbd]"
                      />
                    </label>
                  ))}
                  <label className="grid gap-2">
                    <span className="text-[8px] font-black uppercase tracking-[0.12em] text-[#f0dfbd]">
                      {t.sources}
                    </span>
                    <textarea
                      name="supporting_links"
                      rows={3}
                      className="resize-y border border-white/15 bg-white/10 p-4 text-sm leading-6 text-white outline-none focus:border-[#f0dfbd]"
                    />
                  </label>
                  <label className="flex items-start gap-3 border border-white/12 bg-white/[0.04] p-4 text-xs leading-5 text-[#c7d5d2]">
                    <input
                      type="checkbox"
                      name="authorized"
                      value="yes"
                      required
                      className="mt-1 h-4 w-4 shrink-0 accent-[#e75037]"
                    />
                    <span>{t.attestation}</span>
                  </label>
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex min-h-13 items-center justify-between bg-[#f0dfbd] px-5 text-[9px] font-black uppercase tracking-[0.12em] text-[#102b36] active:scale-[0.99] disabled:cursor-wait disabled:opacity-60"
                  >
                    {sending ? t.sending : t.submit}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </section>
            </article>

            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <section className="bg-[#e75037] p-7 text-white">
                <ShieldCheck className="h-6 w-6 text-[#102b36]" />
                <h2 className="mt-5 font-display text-3xl font-black tracking-[-0.04em]">
                  {t.editorial}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/85">
                  {t.editorialText}
                </p>
              </section>
              <AdUnit language={language} />
              <ContactMini language={language} />
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

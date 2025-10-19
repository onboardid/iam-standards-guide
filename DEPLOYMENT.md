# Deployment Guide

## Vercel Deployment (Recommended)

### Initial Setup

1. **Sign up/Login to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New" → "Project"
   - Select `onboardid/iam-standards-guide` repository
   - Vercel auto-detects Docusaurus framework

3. **Configure Build Settings**
   - **Framework Preset:** Docusaurus
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`
   - **Node Version:** 20.x

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for initial build
   - Site live at: `https://iam-standards-guide.vercel.app`

### Automatic Deployments

- **Production:** Every push to `main` branch auto-deploys
- **Preview:** Every pull request gets unique preview URL
- **Rollback:** Use Vercel dashboard to rollback to previous deployment

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add custom domain (e.g., `iamstandards.guide`)
3. Configure DNS:
   - Type: CNAME
   - Name: @ (or subdomain)
   - Value: `cname.vercel-dns.com`
4. Wait for SSL certificate provisioning (automatic)

## Netlify Deployment (Alternative)

### Initial Setup

1. **Sign up/Login to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign in with GitHub

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Select GitHub → `onboardid/iam-standards-guide`

3. **Configure Build Settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - **Node version:** 20 (in `package.json` engines)

4. **Deploy**
   - Click "Deploy site"
   - Site live at: `https://[random-name].netlify.app`

### Automatic Deployments

- **Production:** Every push to `main` branch
- **Preview:** Every pull request (Deploy Previews)
- **Branch Deploys:** Can enable for other branches

### Custom Domain (Optional)

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS with provided values
4. SSL certificate auto-provisioned

## Environment Variables

If needed in future, add via Vercel/Netlify dashboard:

- Production: Settings → Environment Variables
- Preview: Can configure separate preview env vars

## Deployment Checklist

Before deploying to production:

- [ ] All tests passing (`npm run build`)
- [ ] No broken links (CI checks this)
- [ ] README.md up to date
- [ ] Environment variables configured (if any)
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics configured (when implemented)

## Monitoring

- **Vercel:** Built-in Analytics and Web Vitals monitoring
- **Netlify:** Analytics available (paid feature)
- **External:** Consider Plausible Analytics for privacy-friendly tracking (as specified in PRD)

## Troubleshooting

### Build Fails

- Check build logs in Vercel/Netlify dashboard
- Verify Node version matches `package.json` engines field
- Test build locally: `npm run build`

### Preview Deployments Not Working

- Check GitHub App permissions (Vercel/Netlify needs PR access)
- Verify repository connection in dashboard
- Check branch protection rules don't block deployment bot

### Custom Domain Not Working

- Verify DNS propagation (can take up to 48 hours)
- Check DNS configuration matches dashboard instructions
- Use `dig` or online DNS checker to validate

## Costs

### Vercel
- **Free Tier:** Sufficient for MVP
  - 100 GB bandwidth/month
  - Unlimited preview deployments
  - Auto SSL
- **Pro Tier:** $20/month (if needed for higher traffic)

### Netlify
- **Free Tier:** Sufficient for MVP
  - 100 GB bandwidth/month
  - 300 build minutes/month
  - Deploy previews
- **Pro Tier:** $19/month (if needed)

## Multi-Tenant Client Deployments

For tailored website clients (Story 2.1+):

1. Create client-specific branch: `client-acme-financial`
2. Deploy branch to separate Vercel/Netlify project
3. Configure custom subdomain: `acme.iamstandards.guide`
4. Repeat for each client

Each client gets independent deployment with custom branding and content filtering.
